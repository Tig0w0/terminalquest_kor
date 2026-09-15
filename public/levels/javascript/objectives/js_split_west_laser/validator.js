const vm = require("vm");
const path = require("path");
const jetpack = require("fs-jetpack");

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function isClassDeclaration(obj) {
  return isFunction(obj) && obj.toString && obj.toString().includes("class");
}

module.exports = async (helper) => {
  const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
  const isObjectiveReady =
    TQ_JAVASCRIPT_WORLD_STATE.beamTwoOnline &&
    TQ_JAVASCRIPT_WORLD_STATE.beamThreeOnline &&
    TQ_JAVASCRIPT_WORLD_STATE.beamFourOnline;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(`
      나머지 3개의 광선을 모두 가동하기 전에는 이 레이저를 다시 시작할 수 없습니다.
      자세한 내용은 과제 탭을 확인해 주세요.
    `);
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "ducktypium.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "ducktypium.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {},
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.Ducktypium = Ducktypium;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext(Object.assign({}, scriptContext));

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;

    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === "ReferenceError") {
        return helper.fail(`
          코드에 <span class="highlight">Ducktypium</span> 
          클래스가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 클래스를 찾을 수 없었습니다.
          <br/><br/>
          클래스 이름을 "<span class="highlight">Ducktypium</span>"(으)로 
          지정하셨나요? 대소문자나 철자가 틀리지 않았는지 다시 확인해 보세요.
        `);
      } else {
        return helper.fail(`
          코드를 검증하는 데 문제가 발생했습니다. 확인된 오류는 다음과 같습니다:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isClassDeclaration(tq.Ducktypium)) {
      let message = `
        <span class="highlight">Ducktypium</span>이라는 이름의 변수는 찾았지만,
        클래스(class) 형태가 아닙니다. JavaScript 클래스를 생성하는 방법은 
        도움말 탭을 참고해 보세요.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      // First ensure it errors out on an incorrect input
      try {
        const badColor = new tq.Ducktypium("mauve");

        // If we get to this point, it's actually a failure
        return helper.fail(`
          생성자(constructor)는 "red", "yellow", "blue"만 
          인수로 허용해야 하며, 그 외의 값에는 에러를 발생(throw)시켜야 합니다.
        `);
      } catch (colorError) {
        // This is actually what we want, so continue...
      }

      // Create a test instance
      const dt = new tq.Ducktypium("blue");

      if (dt.color !== "blue") {
        return helper.fail(`
          생성자는 Ducktypium 인스턴스의 "color" 속성을 전달받은 
          첫 번째 인수 값으로 설정해야 합니다.
        `);
      }

      if (!dt.calibrationSequence || dt.calibrationSequence.length !== 0) {
        return helper.fail(`
          생성자는 새로운 Ducktypium 인스턴스의 "calibrationSequence" 속성을 
          빈 배열(empty array)로 초기화해야 합니다.
        `);
      }

      // Ensure functions are defined
      if (!dt.refract || !isFunction(dt.refract)) {
        return helper.fail(`
          Ducktypium 객체에 "refract" 인스턴스 메서드가 존재하지 않습니다.
        `);
      }

      if (!dt.calibrate || !isFunction(dt.calibrate)) {
        return helper.fail(`
          Ducktypium 객체에 "calibrate" 인스턴스 메서드가 존재하지 않습니다.
        `);
      }

      // Check functionality of methods
      if (dt.refract("blue") !== "blue") {
        return helper.fail(`
          refract 메서드는 전달된 색상 인수가 객체의 color 속성과 같을 경우,
          그 색상을 그대로 반환해야 합니다.
        `);
      }

      if (dt.refract("yellow") !== "green") {
        return helper.fail(`
          refract 메서드는 객체의 "color" 속성과 전달된 원색(primary color) 인수가
          결합되었을 때 만들어지는 색상을 반환해야 합니다. 색상 조합 공식은 
          "과제" 탭을 참조하세요.
        `);
      }

      dt.color = "red";
      if (dt.refract("yellow") !== "orange") {
        return helper.fail(`
          refract 메서드는 객체의 "color" 속성과 전달된 원색(primary color) 인수가
          결합되었을 때 만들어지는 색상을 반환해야 합니다. 색상 조합 공식은 
          "과제" 탭을 참조하세요.
        `);
      }

      dt.color = "yellow";
      if (dt.refract("blue") !== "green") {
        return helper.fail(`
          refract 메서드는 객체의 "color" 속성과 전달된 원색(primary color) 인수가
          결합되었을 때 만들어지는 색상을 반환해야 합니다. 색상 조합 공식은 
          "과제" 탭을 참조하세요.
        `);
      }

      dt.calibrate([10, 20, 1]);

      if (
        dt.calibrationSequence[0] !== 3 ||
        dt.calibrationSequence[1] !== 30 ||
        dt.calibrationSequence[2] !== 60
      ) {
        return helper.fail(`
          calibrate 메서드는 입력받은 배열을 정렬한 뒤 3을 곱하여,
          Ducktypium 인스턴스의 "calibrationSequence" 속성에 
          그 결과 배열을 저장해야 합니다. 과제 탭의 설명을 다시 확인해 보세요.
        `);
      }
    } catch (ee) {
      console.log(ee);
      return helper.fail(`
        Ducktypium 생성자 또는 함수를 실행하는 중 오류가 발생했습니다.
        명령줄(터미널)에서 코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요.
        막히는 부분이 있다면 도움말 탭의 시작 코드를 활용해 보세요. 
        호출을 시도했을 때 반환된 오류는 다음과 같습니다: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      마지막 레이저가 번쩍이며 가동됩니다! 주변의 현실 세계가 구부러지고 
      비틀리는 것이 느껴지더니, 시야 구석에서부터 어둠이 밀려와 눈앞을 가립니다.
      잠시 후 어둠이 걷히고, 당신은 주위를 둘러보는데...
    `);
  } catch (e) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 명령줄(터미널)에서
      코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요. 
      발생한 오류는 다음과 같습니다: <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};

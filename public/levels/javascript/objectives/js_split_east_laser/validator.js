const vm = require("vm");
const path = require("path");
const jetpack = require("fs-jetpack");

const isFunction = function (obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = async (helper) => {
  const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
  const isObjectiveReady =
    TQ_JAVASCRIPT_WORLD_STATE.eastWing &&
    TQ_JAVASCRIPT_WORLD_STATE.eastWing.hadSavedConversation;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(`
      전기 엔지니어의 액세스 코드를 받기 전까지는 이 레이저를 다시 시작할 수 없습니다. 
      자세한 내용은 과제 탭을 확인해 주세요.
    `);
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "laserPower.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "laserPower.js" 스크립트를 찾을 수 없습니다. 
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
        __TQ.calculatePower = calculatePower;
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
          코드에 <span class="highlight">calculatePower</span> 
          함수가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 함수를 찾을 수 없었습니다.
          <br/><br/>
          함수 이름을 "<span class="highlight">calculatePower</span>"(으)로 
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
    if (!isFunction(tq.calculatePower)) {
      let message = `
        <span class="highlight">calculatePower</span>라는 이름의 변수는 찾았지만,
        호출 가능한 함수(callable function)가 아닙니다. JavaScript 함수를 생성하는 방법은 
        도움말 탭을 참고해 보세요.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result = tq.calculatePower([]);
      const result2 = tq.calculatePower([4, 1, 10]);

      if (result === undefined || result === null) {
        return helper.fail(`
          함수가 아직 아무런 값도 반환(return)하고 있지 않은 것 같습니다.
          함수가 끝나는 "}" 바로 윗줄에서 <span class="highlight">return</span> 
          키워드를 사용하여 함수 실행 결과값을 되돌려주어야 합니다. 
          도움말 탭의 예제 코드를 참조하세요.
        `);
      }

      if (isNaN(result)) {
        return helper.fail(`
          함수가 숫자가 아닌 값을 반환하고 있습니다.
          함수는 입력된 배열 값들을 모두 더한 총합인 '숫자(number)'를 반환해야 합니다.
        `);
      }

      if (result !== 0 || result2 !== 30) {
        return helper.fail(`
          함수가 숫자를 반환하긴 했지만, 우리가 예상한 정답 수치가 아닙니다.
          도움말과 과제 탭을 확인하여 정확한 숫자값을 계산해 반환하고 있는지 확인해 주세요.
        `);
      }
    } catch (ee) {
      return helper.fail(`
        calculatePower 함수를 실행하는 중 오류가 발생했습니다.
        명령줄(터미널)에서 코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요.
        막히는 부분이 있다면 도움말 탭의 시작 코드를 활용해 보세요. 
        호출을 시도했을 때 반환된 오류는 다음과 같습니다: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      쿵짝쿵짝!(Boomshakalaka!) 레이저가 힘차게 가동되며 실험 역전에 한 걸음 더 다가섰습니다.
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

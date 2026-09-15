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
    TQ_JAVASCRIPT_WORLD_STATE.northWing &&
    TQ_JAVASCRIPT_WORLD_STATE.northWing.hadSavedConversation;

  // The player needs to enable the other beams first
  if (!isObjectiveReady) {
    return helper.fail(`
      물리학자의 액세스 코드를 받기 전까지는 이 레이저를 다시 시작할 수 없습니다. 
      자세한 내용은 과제 탭을 확인해 주세요.
    `);
  }

  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "targetingSolution.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "targetingSolution.js" 스크립트를 찾을 수 없습니다. 
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
        __TQ.TargetingSolution = TargetingSolution;
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
          코드에 <span class="highlight">TargetingSolution</span> 
          클래스가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 클래스를 찾을 수 없었습니다.
          <br/><br/>
          클래스 이름을 "<span class="highlight">TargetingSolution</span>"(으)로 
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
    if (!isClassDeclaration(tq.TargetingSolution)) {
      let message = `
        <span class="highlight">TargetingSolution</span>이라는 이름의 변수는 찾았지만,
        클래스(class) 형태가 아닙니다. JavaScript 클래스를 생성하는 방법은 
        도움말 탭을 참고해 보세요.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = new tq.TargetingSolution({
        x: 32.891,
        y: 120.012,
        z: 345.12,
      });

      if (!isFunction(result1.target)) {
        return helper.fail(`
          TargetingSolution 클래스 인스턴스에 "target" 함수(메서드)가 존재해야 합니다.
        `);
      }

      const result1Target = result1.target().trim();

      if (result1Target !== "(32.891, 120.012, 345.12)") {
        return helper.fail(`
          여러분의 <span class="highlight">TargetingSolution</span> 클래스의 
          <span class="highlight">target</span> 함수가 지정된 형식의 문자열을 
          반환하지 않았습니다. 괄호와 쉼표, 띄어쓰기를 정확히 포함하여 
          <span class="highlight">(x, y, z)</span> 형식이어야 합니다.
        `);
      }
    } catch (ee) {
      return helper.fail(`
        TargetingSolution 생성자 또는 함수를 실행하는 중 오류가 발생했습니다.
        명령줄(터미널)에서 코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요.
        막히는 부분이 있다면 도움말 탭의 시작 코드를 활용해 보세요. 
        호출을 시도했을 때 반환된 오류는 다음과 같습니다: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      레이저가 여러분의 타겟팅 솔루션 클래스를 사용하여 덕타이피움 크리스탈의 
      중앙을 향해 광선을 발사합니다. 이 레이저가 성공적으로 온라인 상태가 되었습니다!
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

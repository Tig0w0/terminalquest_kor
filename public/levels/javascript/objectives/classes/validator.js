const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function isClassDeclaration(obj) {
  return isFunction(obj) && obj.toString && obj.toString().includes('class');
}

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, 'classes.js');

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "classes.js" 스크립트를 찾을 수 없습니다. 
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
        __TQ.Materializer = Materializer;
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
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(`
          코드 내에 <span class="highlight">Materializer</span> 
          클래스가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 클래스를 찾을 수 없었습니다.
          <br/><br/>
          클래스 이름을 "<span class="highlight">Materializer</span>"(으)로 
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
    if (!isClassDeclaration(tq.Materializer)) {
      let message = `
        <span class="highlight">Materializer</span>라는 이름의 
        변수는 찾았지만, 클래스가 아닙니다. JavaScript 클래스 생성에 대한 자세한 
        안내는 도움말 탭을 참고해 보세요.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = new tq.Materializer('Gene');
      const result2 = new tq.Materializer('Irene');

      if (result1.target !== 'Gene') {
        return helper.fail(`
          여러분의 Materializer가 생성자 함수(constructor)로부터 target 값을 제대로 읽어오지 
          못하는 것 같습니다.
        `);
      }

      if (result1.activated !== false) {
        return helper.fail(`
          여러분의 Materializer는 처음에 "activated" 속성값이 
          false로 설정되어 있어야 합니다.
        `);
      }

      if (!isFunction(result1.activate)) {
        return helper.fail(`
          여러분의 Materializer에는 "activate"라는 함수가 있어야 합니다.
        `);
      }

      if (!isFunction(result1.materialize)) {
        return helper.fail(`
          여러분의 Materializer에는 "materialize"라는 함수가 있어야 합니다.
        `);
      }

      result1.activate();

      if (result1.activated !== true) {
        return helper.fail(`
          여러분의 Materializer의 "activate" 함수가 실행되면 
          activated 속성을 true로 변경해야 합니다.
        `);
      }

      const result1Target = result1.materialize();

      if (result1Target !== 'Gene') {
        return helper.fail(`
          여러분의 Materializer가 활성화(activated)되었을 때, "materialize" 함수는 
          target 값인 "Gene"을 반환해야 합니다.
        `);
      }

      const result2Target = result2.materialize();

      if (result2Target !== undefined) {
        return helper.fail(`
          여러분의 Materializer가 아직 활성화되지 않았을 때, "materialize" 함수는 
          undefined를 반환해야 합니다.
        `);
      }
    } catch (ee) {
      return helper.fail(`
        여러분의 Materialize 생성자나 함수를 실행하는 데 오류가 발생했습니다. 명령줄(터미널)에서 
        오류 없이 정상적으로 실행되는지 먼저 확인한 뒤 다시 시도해 주세요. 막히는 부분이 있다면 
        도움말 탭의 시작 코드를 활용해 보세요. 여러분의 코드를 호출하는 도중 발생한 오류는 
        다음과 같습니다: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      해냈습니다! 물질 구체화기 콘솔이 다시 생명을 되찾으며, 
      방 한가운데 있는 챔버의 기능이 일부 복구되었습니다.
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

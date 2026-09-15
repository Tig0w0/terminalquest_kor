const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'laserConfiguration.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "laserConfiguration.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = { __TQ: {} };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.laserStatus = laserStatus;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext();

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
          코드에 <span class="highlight">laserStatus</span> 변수가 
          정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 변수를 찾을 수 없었습니다.
          <br/><br/>
          변수 이름을 "<span class="highlight">laserStatus</span>"(으)로 
          지정하셨나요? 철자가 틀리지 않았는지 다시 확인해 보세요.
        `);
      } else {
        return helper.fail(`
          코드를 검증하는 데 문제가 발생했습니다. 확인된 오류는 다음과 같습니다:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // Check for the correct value of the string
    if (tq.laserStatus !== 'OFF') {
      return helper.fail(`
        <span class="highlight">laserStatus</span> 변수를 선언하긴 했지만,
        값이 문자열 "OFF"로 설정되지 않았습니다. 문자열 변수를 어떻게 선언하는지
        확인하려면 '도움말' 탭을 참고하세요. 현재 설정하신 값은 다음과 같습니다:
        <strong>"${tq.laserStatus}"</strong>.
      `);
    }

    helper.success(`
      성공입니다! 직접 작성하신 JavaScript 코드로 레이저 설정을 덮어쓰자, 
      곧바로 레이저가 사라졌습니다. <br/><br/>
      이제 사무실 안쪽으로 계속 진행하실 수 있습니다.
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

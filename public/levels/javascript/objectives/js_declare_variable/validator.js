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
        JavaScript 코드 폴더에서 "laserConfiguration.js" 스크립트를 찾지
        못했습니다. 다음 파일이 존재하는지 확인하세요.<br/><br/>
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

    let script = new vm.Script(userCode);
    script.runInNewContext();
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    const tq = scriptContext.__TQ;
    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(`
          코드의 전역 범위에서 <span class="highlight">laserStatus</span>
          변수를 찾지 못했습니다.<br/><br/>변수 이름을 정확히
          "<span class="highlight">laserStatus</span>"로 작성했는지 철자를
          다시 확인하세요.
        `);
      }

      return helper.fail(`
        코드를 검증하는 중 문제가 발생했습니다. 발생한 오류는 다음과 같습니다.
        <br/><br/>${tq.error}
      `);
    }

    if (tq.laserStatus !== 'OFF') {
      return helper.fail(`
        <span class="highlight">laserStatus</span> 변수를 선언했지만 문자열
        값 "OFF"가 지정되지 않았습니다. 문자열 변수를 선언하는 방법은 도움말을
        확인하세요. 현재 값: <strong>"${tq.laserStatus}"</strong>
      `);
    }

    helper.success(`
      성공했습니다! 작성한 JavaScript 코드가 레이저 설정을 덮어쓰자 레이저가
      사라졌습니다.<br/><br/>이제 사무실로 계속 이동할 수 있습니다.
    `);
  } catch (error) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. command line에서
      정상적으로 실행되는지 확인한 뒤 다시 시도하세요.<br/><br/>
      <span class="highlight">${error}</span>
    `);
  }
};

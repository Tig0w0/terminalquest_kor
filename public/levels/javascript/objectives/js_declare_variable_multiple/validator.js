const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      'chestConfiguration.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "chestConfiguration.js" 스크립트를 찾지
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
        __TQ.accessLevel = accessLevel;
        __TQ.favoriteRobot = favoriteRobot;
        __TQ.verifiedUser = verifiedUser;
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
        const { message } = tq.error;
        let missingVariable = 'accessLevel';
        if (message.includes('favoriteRobot')) {
          missingVariable = 'favoriteRobot';
        } else if (message.includes('verifiedUser')) {
          missingVariable = 'verifiedUser';
        }

        return helper.fail(`
          코드의 전역 범위에서 <span class="highlight">${missingVariable}</span>
          변수를 찾지 못했습니다.<br/><br/>변수 이름을 정확히
          "<span class="highlight">${missingVariable}</span>"로 작성했는지
          철자를 다시 확인하세요.
        `);
      }

      return helper.fail(`
        코드를 검증하는 중 문제가 발생했습니다. 발생한 오류는 다음과 같습니다.
        <br/><br/>${tq.error}
      `);
    }

    if (typeof tq.accessLevel !== 'number') {
      let message = `
        <span class="highlight">accessLevel</span> 변수를 찾았지만 예상한 Number
        타입이 아닙니다. 실제 타입은
        <span class="highlight">${typeof tq.accessLevel}</span>입니다.
      `;

      if (typeof tq.accessLevel === 'string') {
        message += `<br/><br/>
          실수로 이 변수를 문자열로 만든 것 같습니다. number와 boolean 값은
          코드에서 따옴표로 감싸지 않습니다. number 변수 선언 예제는 도움말을
          확인하세요.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.verifiedUser !== 'boolean') {
      let message = `
        <span class="highlight">verifiedUser</span> 변수를 찾았지만 예상한 Boolean
        타입이 아닙니다. 실제 타입은
        <span class="highlight">${typeof tq.verifiedUser}</span>입니다.
      `;

      if (typeof tq.verifiedUser === 'string') {
        message += `<br/><br/>
          실수로 이 변수를 문자열로 만든 것 같습니다. number와 boolean 값은
          코드에서 따옴표로 감싸지 않습니다. boolean 변수 선언 예제는 도움말을
          확인하세요.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.favoriteRobot !== 'string') {
      return helper.fail(`
        <span class="highlight">favoriteRobot</span> 변수를 찾았지만 예상한 String
        타입이 아닙니다. 실제 타입은
        <span class="highlight">${typeof tq.favoriteRobot}</span>입니다.
      `);
    }

    if (tq.accessLevel !== 7) {
      return helper.fail(`
        <span class="highlight">accessLevel</span> 변수의 값이 예상한 숫자
        <span class="highlight">7</span>이 아닙니다. 현재 값:
        <span class="highlight">${tq.accessLevel}</span>
      `);
    }

    if (tq.favoriteRobot !== 'Cedric') {
      return helper.fail(`
        <span class="highlight">favoriteRobot</span> 변수의 값이 예상한 문자열
        <span class="highlight">"Cedric"</span>이 아닙니다. 현재 값:
        <span class="highlight">"${tq.favoriteRobot}"</span>
      `);
    }

    if (tq.verifiedUser !== true) {
      return helper.fail(`
        <span class="highlight">verifiedUser</span> 변수의 값이 예상한 boolean
        <span class="highlight">true</span>가 아닙니다. 현재 값:
        <span class="highlight">${tq.verifiedUser}</span>
      `);
    }

    helper.success(`
      좋습니다! 설정 덮어쓰기가 정상적으로 작동해 상자 안의 보급품을 사용할 수
      있게 됐습니다.
    `);
  } catch (error) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. command line에서
      정상적으로 실행되는지 확인한 뒤 다시 시도하세요.<br/><br/>
      <span class="highlight">${error}</span>
    `);
  }
};

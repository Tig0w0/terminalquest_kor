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
        JavaScript 코드 폴더에서 "chestConfiguration.js" 스크립트를 찾을 수 없습니다. 
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
        __TQ.accessLevel = accessLevel;
        __TQ.favoriteRobot = favoriteRobot;
        __TQ.verifiedUser = verifiedUser;
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
        const { message } = tq.error;

        let missingVariable = 'accessLevel';
        if (message.includes('favoriteRobot')) {
          missingVariable = 'favoriteRobot';
        } else if (message.includes('verifiedUser')) {
          missingVariable = 'verifiedUser';
        }

        return helper.fail(`
          코드에 <span class="highlight">${missingVariable}</span> 변수가 
          정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 변수를 찾을 수 없었습니다.
          <br/><br/>
          변수 이름을 "<span class="highlight">${missingVariable}</span>"(으)로 
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

    // Check variable types, and provide appropriate feedback
    if (typeof tq.accessLevel !== 'number') {
      let message = `
        <span class="highlight">accessLevel</span> 변수를 찾았지만,
        예상했던 숫자(Number) 객체가 아닙니다. 실제로는
        <span class="highlight">${typeof tq.accessLevel}</span> 객체인 것 같습니다.
      `;

      if (typeof tq.accessLevel === 'string') {
        message += `<br/><br/>
          이 변수를 실수로 문자열로 만드신 것 같습니다. 코드에서 숫자나 
          불리언(boolean) 같은 값은 따옴표로 감싸지 않습니다.
          숫자형 변수 선언 예시는 '도움말' 탭을 확인해 주세요.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.verifiedUser !== 'boolean') {
      let message = `
        <span class="highlight">verifiedUser</span> 변수를 찾았지만,
        예상했던 불리언(Boolean) 객체가 아닙니다. 실제로는
        <span class="highlight">${typeof tq.verifiedUser}</span> 객체인 것 같습니다.
      `;

      if (typeof tq.verifiedUser === 'string') {
        message += `<br/><br/>
          이 변수를 실수로 문자열로 만드신 것 같습니다. 코드에서 숫자나 
          불리언(boolean) 같은 값은 따옴표로 감싸지 않습니다.
          불리언형 변수 선언 예시는 '도움말' 탭을 확인해 주세요.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.favoriteRobot !== 'string') {
      let message = `
        <span class="highlight">favoriteRobot</span> 변수를 찾았지만,
        예상했던 문자열(String) 객체가 아닙니다. 실제로는
        <span class="highlight">${typeof tq.favoriteRobot}</span> 객체인 것 같습니다.
      `;

      return helper.fail(message);
    }

    // Check variable values, now that we know they exist
    if (tq.accessLevel !== 7) {
      return helper.fail(`
        <span class="highlight">accessLevel</span> 변수를 찾았지만,
        값이 예상했던 숫자 <span class="highlight">7</span>로 설정되지
        않았습니다. 현재 <span class="highlight">${tq.accessLevel}</span>(으)로 
        설정된 것 같습니다.
      `);
    }

    if (tq.favoriteRobot !== 'Cedric') {
      return helper.fail(`
        <span class="highlight">favoriteRobot</span> 변수를 찾았지만,
        값이 예상했던 문자열 <span class="highlight">"Cedric"</span>으로 설정되지
        않았습니다. 현재 <span class="highlight">"${tq.favoriteRobot}"</span>(으)로 
        설정된 것 같습니다.
      `);
    }

    if (tq.verifiedUser !== true) {
      return helper.fail(`
        <span class="highlight">verifiedUser</span> 변수를 찾았지만,
        값이 예상했던 불리언 <span class="highlight">true</span>로 설정되지
        않았습니다. 현재 <span class="highlight">${tq.verifiedUser}</span>(으)로 
        설정된 것 같습니다.
      `);
    }

    helper.success(`
      멋집니다! 성공적으로 설정을 덮어썼고, 이제 상자 안의 보급품을 
      이용할 수 있게 되었습니다.
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

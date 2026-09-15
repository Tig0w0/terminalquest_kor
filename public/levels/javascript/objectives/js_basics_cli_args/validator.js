const path = require('path');
const jetpack = require('fs-jetpack');
const {
  executeCodeString,
} = require('../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      'divideByTwo.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "divideByTwo.js" 스크립트를 찾지 못했습니다.
        다음 파일이 존재하는지 확인하세요.<br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode, ['128']);

    if (!stdout.includes('64')) {
      helper.fail(`
        스크립트를 실행했지만 입력한 숫자를 2로 나눈 결과가 출력되지 않았습니다.
        <br/><br/>도움말 탭의 예제에서 <em>마지막 코드 줄을 수정</em>했는지
        확인하세요.
      `);
      return;
    }

    helper.success(`
      빠진 나눗셈 스크립트를 복구하자 레이저가 사라졌습니다.<br/><br/>
      과학자의 책상에서 <strong>레이저 비밀번호를 가져가세요</strong>!
    `);
  } catch (error) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 코드가 정상적으로
      실행되는지 확인한 뒤 다시 시도하세요. 발생한 오류는 다음과 같습니다.
      <br/><br/>${error}
    `);
  }
};

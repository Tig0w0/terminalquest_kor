const path = require('path');
const jetpack = require('fs-jetpack');
const {
  executeCodeString,
} = require('../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, 'sayPlease.js');

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "sayPlease.js" 스크립트를 찾지 못했습니다.
        다음 파일이 존재하는지 확인하세요.<br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode);

    if (!stdout.includes('please')) {
      helper.fail(`
        스크립트를 실행했지만 "마법의 단어"가 출력되지 않았습니다.<br/><br/>
        스크립트가 오류 없이 실행되며 "please"라는 단어가 포함된 메시지를
        출력하는지 확인하세요.
      `);
      return;
    }

    helper.success(`
      IT 부서의 글렌에게 정중한 요청을 보내자 잠시 후 레이저 장벽이
      사라졌습니다.<br/><br/>이제 사무실을 향해 계속 이동할 수 있습니다.
    `);
  } catch (error) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 코드가 정상적으로
      실행되는지 확인한 뒤 다시 시도하세요. 발생한 오류는 다음과 같습니다.
      <br/><br/>${error}
    `);
  }
};

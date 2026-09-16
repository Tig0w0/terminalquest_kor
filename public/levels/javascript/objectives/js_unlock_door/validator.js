const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, "sayPlease.js");

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "sayPlease.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode);

    if (!stdout.includes("please")) {
      helper.fail(`
        스크립트를 실행해 보았지만, "마법의 단어(please)"가 출력되지 않았습니다. 
        <br/><br/>
        
        스크립트가 오류 없이 실행되는지, 그리고 출력되는 메시지에
        "please"라는 단어가 포함되어 있는지 다시 한번 확인해 주세요.
      `);
      return;
    }

    helper.success(`
      IT 부서의 글렌에게 정중한 요청을 보냈습니다. 잠시 후,
      레이저 장벽이 사라집니다.
      <br/><br/>
      이제 사무실 안쪽으로 더 진입할 수 있습니다.
    `);
  } catch (e) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 코드에 문법 오류가 없는지
      확인하신 후 다시 시도해 주세요. 발생한 오류 메시지는 다음과 같습니다: <br/><br/>
      ${e}
    `);
  }
};

const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "shouldWater.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "shouldWater.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["0", "10"]);

    if (result.stdout && result.stdout.trim() !== "") {
      helper.fail(`
        두 번째 인수가 10 이하일 경우에는 스크립트가 아무것도 출력하지 않아야 합니다.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["1", "11"]);

    if (result.stdout && result.stdout.trim() !== "") {
      helper.fail(`
        첫 번째 인수가 0이 아닐 경우에는 스크립트가 아무것도 출력하지 않아야 합니다.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["0", "11"]);

    if (!result.stdout || !result.stdout.toLowerCase().includes("water")) {
      helper.fail(`
        첫 번째 인수로 0을, 두 번째 인수로 10보다 큰 숫자를 전달받았을 때,
        스크립트는 "WATER"를 출력해야 합니다.
      `);
      return;
    }

    helper.success(`
      성공입니다! 남쪽 다리와 함께 자동 스프링클러 시스템도 다시 
      온라인 상태가 된 것 같습니다.
    `);
  } catch (e) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 명령줄(터미널)에서
      코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요. 
      발생한 오류는 다음과 같습니다: <br/><br/>
      ${e}
    `);
  }
};

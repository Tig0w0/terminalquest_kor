const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, "sortOrder.js");

    const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;
    const isObjectiveReady =
      TQ_JAVASCRIPT_WORLD_STATE.eastWing &&
      TQ_JAVASCRIPT_WORLD_STATE.southWing.hadSavedConversation;

    // The player needs to enable the other beams first
    if (!isObjectiveReady) {
      return helper.fail(`
        식물학자의 액세스 코드를 받기 전까지는 이 레이저를 다시 시작할 수 없습니다.
        자세한 내용은 과제 탭을 확인해 주세요.
      `);
    }

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "sortOrder.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["a", "b"]);

    if (!result.stdout || result.stdout.trim() !== "-1") {
      helper.fail(`
        전달된 첫 번째 인수가 두 번째 인수보다 알파벳순으로 앞에(sooner) 올 때, 
        스크립트는 "-1"을 출력해야 합니다.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, [
      "apples",
      "Ability",
    ]);

    if (!result.stdout || result.stdout.trim() !== "1") {
      helper.fail(`
        전달된 첫 번째 인수가 두 번째 인수보다 알파벳순으로 뒤에(later) 올 때, 
        스크립트는 "1"을 출력해야 합니다.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, [
      "apples",
      "APPleS",
    ]);

    if (!result.stdout || result.stdout.trim() !== "0") {
      helper.fail(`
        전달된 첫 번째 인수가 두 번째 인수와 같을 때(대소문자 무시), 
        스크립트는 "0"을 출력해야 합니다.
      `);
      return;
    }

    helper.success(`
      훌륭합니다! 정렬 비교 스크립트가 잘 작동하는 것 같습니다. 
      정지 광선 2번(Stasis Beam 2)이 번쩍이며 가동됩니다!
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

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
      "enhancedLifeDetector.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "enhancedLifeDetector.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, ["11"]);

    if (result.stdout && result.stdout.trim() !== "other") {
      helper.fail(`
        스크립트에 0, 1, 2 이외의 숫자가 전달되었을 때는 "other"를 출력해야 합니다.
        하지만 여러분의 스크립트는 다음을 출력했습니다:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["0"]);

    if (!result.stdout || result.stdout.trim() !== "alive") {
      helper.fail(`
        스크립트에 0이 전달되었을 때는 "alive"를 출력해야 합니다.
        하지만 여러분의 스크립트는 다음을 출력했습니다:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["1"]);

    if (!result.stdout || result.stdout.trim() !== "flowering") {
      helper.fail(`
        스크립트에 1이 전달되었을 때는 "flowering"을 출력해야 합니다.
        하지만 여러분의 스크립트는 다음을 출력했습니다:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["2"]);

    if (!result.stdout || result.stdout.trim() !== "shedding") {
      helper.fail(`
        스크립트에 2가 전달되었을 때는 "shedding"을 출력해야 합니다.
        하지만 여러분의 스크립트는 다음을 출력했습니다:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    helper.success(`
      나무 생명 탐지기에 적용한 여러분의 수정사항이 제대로 작동하는 것 같습니다!
      앞쪽의 다리가 윙윙거리며 작동하고, 마침내 식물학자에게 가는 길이 열렸습니다.<br/><br/> 
      <strong>앞으로 전진하세요!</strong>
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

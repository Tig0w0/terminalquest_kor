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
      "northBridgeControl.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "northBridgeControl.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, [
      "asjkdhfahsdf",
    ]);

    if (result.stdout && result.stdout.trim() !== "") {
      helper.fail(`
        스크립트가 <strong>EXTEND</strong>라는 특별한 인수 없이 실행되었을 때는
        아무것도 출력하지 않아야 합니다. 하지만 스크립트에서 다음 내용이 출력되었습니다:<br/><br/>
        ${result.stdout}
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ["EXTEND"]);

    if (
      !result.stdout ||
      !result.stdout.toLowerCase().includes("extending bridge")
    ) {
      helper.fail(`
        스크립트가 "EXTEND"를 인수로 받으면 "Extending bridge!"를 출력해야 합니다.
        <strong>도움말 탭</strong>의 예제 코드를 다시 한번 확인해 보세요.
      `);
      return;
    }

    helper.success(`
      다리의 활성화 루틴을 교체하자 순수한 에너지로 만들어진 다리가 
      여러분 앞으로 펼쳐집니다. <strong>앞으로 계속 전진하여</strong> 
      식물학자를 찾으세요!
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

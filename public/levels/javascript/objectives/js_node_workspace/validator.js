const jetpack = require("fs-jetpack");
const { NiceError } = require("../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { workspacePath } = helper.validationFields;

    if (!workspacePath) {
      throw new NiceError(`
        Node.js 작업 공간(workspace) 디렉터리 경로를 입력해 주세요!
      `);
    }

    const exists = await jetpack.existsAsync(workspacePath);
    if (!exists) {
      throw new NiceError(`
        입력하신 경로에서 디렉터리를 찾을 수 없습니다. 
        텍스트 입력란에 붙여넣은 디렉터리 경로가 정확한지 다시 한번 
        확인해 주세요.
      `);
    }

    helper.success(
      `
      JavaScript 작업 공간이 확인되었습니다. 연구소 출입이 승인되었습니다.
      보안 게이트를 통과하여 진입하세요.
    `,
      [
        {
          name: "JAVASCRIPT_WORKSPACE_PATH",
          value: workspacePath,
        },
      ]
    );
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(`
        죄송합니다! Node.js 작업 공간 경로를 성공적으로 찾지 못했습니다.
      `);
    }
  }
};

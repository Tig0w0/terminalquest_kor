const jetpack = require('fs-jetpack');
const {
  NiceError,
} = require('../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation');

module.exports = async helper => {
  try {
    const { workspacePath } = helper.validationFields;

    if (!workspacePath) {
      throw new NiceError('Node.js workspace 디렉터리 경로를 입력하세요!');
    }

    const exists = await jetpack.existsAsync(workspacePath);
    if (!exists) {
      throw new NiceError(`
        입력한 경로에서 디렉터리를 찾지 못했습니다. 입력란에 붙여 넣은
        디렉터리 경로가 정확한지 다시 확인하세요.
      `);
    }

    helper.success(
      `
        JavaScript workspace를 확인했습니다. 연구소 접근이 허가됐습니다.
        보안 게이트를 지나가세요.
      `,
      [
        {
          name: 'JAVASCRIPT_WORKSPACE_PATH',
          value: workspacePath,
        },
      ]
    );
  } catch (error) {
    console.log(error);
    if (error.name === 'NiceError') {
      helper.fail(error.message);
    } else {
      helper.fail('Node.js workspace 경로를 확인하지 못했습니다.');
    }
  }
};

const { spawn } = require('child_process');

module.exports = async helper => {
  try {
    const { nodePath } = helper.validationFields;
    const args = ['--version'];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(nodePath, args);

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    const nodeVersion = spawn(nodePath, args);
    let versionString = '';
    nodeVersion.stdout.on('data', data => {
      versionString += `${data}`;
    });

    nodeVersion.on('close', code => {
      if (code === 0) {
        helper.success(`
          좋습니다! 다음 버전이 설치되어 있습니다.<br/>
          <span class="highlight">${versionString}</span><br/><br/>
          다음 보안 검사 지점으로 이동하세요.
        `, [{ name: 'NODE_EXE', value: nodePath }]);
      } else {
        helper.fail(`
          이런… 이 Node.js 경로를 검증하는 중 문제가 발생했습니다.
          경로를 다시 확인하고 재시도하세요.
        `);
      }
    });
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        죄송합니다! Node.js 설치를 검증하지 못했습니다. 다시 시도하세요.
      `);
    }
  }
};

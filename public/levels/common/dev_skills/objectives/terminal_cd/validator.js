const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  const { pwdOutput } = helper.validationFields;

  if (!pwdOutput) {
    return helper.fail(`
      <strong>pwd</strong> 명령어의 출력값을 입력해 주세요!
    `);
  }

  try {
    const exists = await jetpack.existsAsync(pwdOutput);
    if (!exists) {
      return helper.fail(`
        입력한 값은 컴퓨터에 존재하는 폴더의 올바른 경로가 아닌 것 같습니다.
        다른 문구는 제외하고 <strong>pwd</strong> 명령어의 출력값만
        복사해 붙여 넣었는지 확인해 주세요!
      `);
    }

    if (path.basename(pwdOutput) !== 'quest') {
      return helper.fail(`
        과제의 안내와 달리 폴더 이름이 <strong>quest</strong>가 아닌 것 같습니다.
        지시를 정확히 따랐는지 확인해 주세요. 폴더 이름을 바꿔야 한다면
        "도움말" 탭의 안내를 확인하세요.
      `);
    }
  } catch (e) {
    console.log(e);
    return helper.fail(`
      입력값을 검사하는 중 문제가 발생했습니다. 다시 시도해 주세요.
    `);
  }

  helper.success(`
    잘했습니다! CLI를 사용해 컴퓨터에 새 폴더를 만들었습니다.
  `);
};

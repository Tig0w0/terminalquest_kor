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
  } catch (e) {
    console.log(e);
    return helper.fail(`
      입력값을 검사하는 중 문제가 발생했습니다. 다시 시도해 주세요.
    `);
  }

  helper.success(`
    맞았습니다! 입력한 값은 컴퓨터에 존재하는 올바른 폴더 경로입니다.

    앞을 가로막던 장벽이 사라졌습니다. 이제 시뮬레이션 안쪽으로
    더 나아갈 수 있습니다.
  `);
};

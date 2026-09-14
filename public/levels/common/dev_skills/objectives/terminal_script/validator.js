const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  const rawScriptPath = helper.validationFields.scriptPath;

  if (!rawScriptPath) {
    return helper.fail(`
      새로 만든 스크립트 파일의 전체 경로를 입력해 주세요!
    `);
  }

  const scriptPath = rawScriptPath.trim().replace(/^['"]|['"]$/g, '');
  const extension = path.extname(scriptPath).toLowerCase();

  if (extension !== '.sh' && extension !== '.ps1') {
    return helper.fail(`
      스크립트 파일 이름은 Mac/Linux에서 <strong>my_script.sh</strong>,
      Windows에서 <strong>my_script.ps1</strong>이어야 합니다.
    `);
  }

  try {
    if ((await jetpack.existsAsync(scriptPath)) !== 'file') {
      return helper.fail(`
        해당 경로에서 스크립트 파일을 찾을 수 없습니다. 파일의 전체 경로를
        입력했는지 확인해 주세요.
      `);
    }

    const script = await jetpack.readAsync(scriptPath, 'utf8');
    if (!/(^|\s)echo\s+/im.test(script)) {
      return helper.fail(`
        스크립트 안에서 <strong>echo</strong> 명령어를 찾을 수 없습니다.
        echo를 사용해 텍스트 한 줄을 출력하도록 작성해 주세요.
      `);
    }

    helper.success(`
      성공입니다! 처음 만든 스크립트를 확인했습니다. 마지막 레이저 장벽이
      사라지고 깃발이 든 상자로 가는 길이 열립니다.
    `);
  } catch (e) {
    console.log(e);
    return helper.fail(`
      스크립트 파일을 검사하는 중 문제가 발생했습니다. 다시 시도해 주세요.
    `);
  }
};

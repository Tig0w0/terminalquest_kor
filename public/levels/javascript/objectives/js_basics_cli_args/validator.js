const path = require("path");
const jetpack = require("fs-jetpack");
const {
  executeCodeString,
} = require("../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      "divideByTwo.js"
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "divideByTwo.js" 스크립트를 찾을 수 없습니다.
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode, ["128"]);

    if (!stdout.includes("64")) {
      helper.fail(`
        작성하신 스크립트를 실행해 보았지만, 입력된 숫자를 2로 나눈 결과가 
        제대로 출력되지 않았습니다.
        <br/><br/>
        
        '도움말' 탭에 제공된 예제 코드의 <em>마지막 줄을 수정</em>하여
        계산된 결과가 출력되도록 만들어 보세요.
      `);
      return;
    }

    helper.success(`
      누락된 나눗셈 스크립트를 교체하자, 가로막고 있던 레이저가 사라졌습니다.
      <br/><br/>
      <strong>과학자의 책상으로 가서 레이저 비밀번호를 획득</strong>하세요!
    `);
  } catch (e) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 코드에 문법 오류가 없는지
      확인하신 후 다시 시도해 주세요. 발생한 오류 메시지는 다음과 같습니다: <br/><br/>
      ${e}
    `);
  }
};

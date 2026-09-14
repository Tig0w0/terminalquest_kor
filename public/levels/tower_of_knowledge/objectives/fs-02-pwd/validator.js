const { existsSync } = require("fs");

module.exports = async function (helper) {
  const pwd = helper.getNormalizedInput("pwd", {
    lowerCase: false,
  });

  try {
    if (!pwd) {
      helper.fail(
        "해킹 인터페이스에 현재 작업 디렉터리를 입력해야 합니다!"
      );
      return;
    }

    if (!existsSync(pwd)) {
      helper.fail(
        `TwilioQuest가 입력한 경로 "${pwd}"을(를) 컴퓨터에서 찾을 수 없습니다.`
      );
      return;
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 현재 작업 디렉터리를 검증하는 중 오류가 발생했습니다.

    ${err}`);
    return;
  }

  helper.success(
    "TwilioQuest가 현재 작업 디렉터리를 확인했습니다! 잘했습니다!",
    [
      {
        name: "DEV_FUNDAMENTALS_FILE_SYSTEM_PWD",
        value: pwd,
      },
    ]
  );
};

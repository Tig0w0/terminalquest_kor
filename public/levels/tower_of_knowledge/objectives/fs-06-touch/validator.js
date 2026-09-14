const { existsSync, lstatSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR } = helper.env;
  const newFileName = helper.getNormalizedInput("newFileName", {
    lowerCase: false,
  });
  const newFilePath = path.join(
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    newFileName
  );

  try {
    if (!newFileName) {
      helper.fail("새로 만든 파일의 이름을 입력해야 합니다!");
      return;
    }
    if (!existsSync(newFilePath)) {
      helper.fail(`"${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"에서 "${newFileName}" 파일을 찾지 못했습니다! 올바른 디렉터리에 만들었는지 확인하세요!`);
      return;
    }

    const fileStats = lstatSync(newFilePath);
    if (!fileStats.isFile()) {
      helper.fail(`"${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"에서 "${newFileName}"을(를) 찾았지만 파일이 아닙니다! 올바른 파일 생성 명령어를 사용했는지 확인하세요!`);
      return;
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 새 파일을 확인하는 중 문제가 발생했습니다!

      ${err}`);
    return;
  }

  helper.success("TwilioQuest가 새 파일을 찾았습니다! 잘했습니다!", [
    {
      name: "DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE",
      value: newFilePath,
    },
  ]);
};

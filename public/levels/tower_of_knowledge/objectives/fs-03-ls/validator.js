const { existsSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD } = helper.env;
  const directoryOrFileName = helper.getNormalizedInput("directoryOrFileName", {
    lowerCase: false,
  });
  let absolutePathToDirOrFile;

  try {
    if (!directoryOrFileName) {
      helper.fail("해킹 인터페이스에 디렉터리 또는 파일 이름을 입력해야 합니다!");
      return;
    }

    absolutePathToDirOrFile = path.join(
      TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD,
      directoryOrFileName
    );

    if (!existsSync(absolutePathToDirOrFile)) {
      helper.fail(
        `앞서 입력한 현재 작업 디렉터리 "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD}"에서 "${directoryOrFileName}"을(를) 찾을 수 없습니다.`
      );
      return;
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 현재 작업 디렉터리를 검증하는 중 오류가 발생했습니다.

    ${err}`);
    return;
  }

  helper.success(
    `TwilioQuest가 "${absolutePathToDirOrFile}" 경로에서 파일 또는 디렉터리를 찾았습니다. 잘했습니다!`
  );
};

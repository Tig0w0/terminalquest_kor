const { existsSync, lstatSync } = require("fs");
const path = require("path");

// https://stackoverflow.com/questions/37521893/determine-if-a-path-is-subdirectory-of-another-in-node-js
function isPathParent(parent, potentialChild) {
  const relative = path.relative(parent, potentialChild);
  return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD } = helper.env;
  const newDirPath = helper.getNormalizedInput("newDirPath", {
    lowerCase: false,
  });

  try {
    if (!newDirPath) {
      helper.fail("해킹 인터페이스에 새 디렉터리 경로를 입력해야 합니다!");
      return;
    }
    if (!existsSync(newDirPath)) {
      helper.fail(`입력한 경로 "${newDirPath}"에서 디렉터리를 찾을 수 없습니다.`);
      return;
    }
    if (!isPathParent(TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD, newDirPath)) {
      helper.fail(`새 디렉터리 "${newDirPath}"을(를) 찾았지만, 앞서 입력한 현재 작업 디렉터리 "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_PWD}" 안에 만들어야 합니다.`);
      return;
    }

    const entryStats = lstatSync(newDirPath);
    if (!entryStats.isDirectory()) {
      helper.fail(`"${newDirPath}"을(를) 찾았지만 디렉터리가 아닙니다! 디렉터리를 만들 때 올바른 명령어를 사용했는지 확인하세요!`);
      return;
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 현재 작업 디렉터리를 검증하는 중 오류가 발생했습니다.

    ${err}`);
    return;
  }

  helper.success("TwilioQuest가 새 디렉터리를 찾았습니다! 잘했습니다!", [
    {
      name: "DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR",
      value: newDirPath,
    },
  ]);
};

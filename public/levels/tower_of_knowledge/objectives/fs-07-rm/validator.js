const { existsSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const {
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE,
  } = helper.env;
  const fileName = path.basename(TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE);

  try {
    if (existsSync(TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_FILE)) {
      helper.fail(`"${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}" 디렉터리에 "${fileName}"이(가) 아직 있습니다! "rm"으로 파일을 삭제하세요!`);
      return;
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 "${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"에서 "${fileName}"의 삭제 여부를 확인하는 중 오류가 발생했습니다.

    ${err}`);
    return;
  }

  helper.success("TwilioQuest가 파일이 삭제된 것을 확인했습니다. 훌륭합니다!");
};

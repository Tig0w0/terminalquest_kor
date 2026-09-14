const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { existsSync, lstatSync } = require("fs");
const path = require("path");

module.exports = async function (helper) {
  const { TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR } = helper.env;
  const os = process.platform;
  const newFileName = os === "win32" ? "sneaky.txt" : ".sneaky.txt";
  const newFilePath = path.join(
    TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
    newFileName
  );

  try {
    if (!existsSync(newFilePath)) {
      if (os !== "win32") {
        const visibleNixFileName = "sneaky.txt";
        const visibleNixFilePath = path.join(
          TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
          visibleNixFileName
        );

        if (existsSync(visibleNixFilePath)) {
          helper.fail("파일은 찾았지만 숨김 파일이 아닙니다! `.myFile.txt`처럼 이름 맨 앞에 점을 붙이세요.");
          return;
        }
      }

      helper.fail(`"${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"에서 "${newFileName}"을(를) 찾지 못했습니다! 올바른 디렉터리인지, 이름에 오타가 없는지 확인하세요!`);
      return;
    }

    const fileStats = lstatSync(newFilePath);
    if (!fileStats.isFile()) {
      helper.fail(`"${TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR}"에서 "${newFileName}"을(를) 찾았지만 파일이 아닙니다! 올바른 파일 생성 명령어를 사용했는지 확인하세요!`);
      return;
    }

    if (os === "win32") {
      const { stdout } = await exec("powershell.exe (ls -ah).Name", {
        cwd: TQ_DEV_FUNDAMENTALS_FILE_SYSTEM_NEW_DIR,
      });

      if (!stdout.includes(newFileName)) {
        helper.fail('파일은 찾았지만 숨겨져 있지 않습니다! "attrib" 명령어에 "+h" 옵션을 사용해 파일을 숨기세요!');
        return;
      }
    }
  } catch (err) {
    helper.fail(`TwilioQuest가 현재 작업 디렉터리에서 "${newFileName}"을(를) 확인하는 중 오류가 발생했습니다.

    ${err}`);
    return;
  }

  helper.success("TwilioQuest가 숨겨진 sneaky 파일을 찾았습니다! 잘했습니다!");
};

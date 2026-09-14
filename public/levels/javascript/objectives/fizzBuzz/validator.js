const path = require("path");
const jetpack = require("fs-jetpack");
const { executeCodeString } = require("../../../../scripts/objectiveValidation");

function correctDecrypt(number) {
  let output = "";
  if (number % 3 === 0) output += "Java";
  if (number % 5 === 0) output += "Script";
  if (!output) output = String(number);
  return output;
}

module.exports = async (helper) => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, "fizzBuzz.js");
    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`JavaScript 코드 폴더에서 "fizzBuzz.js" 스크립트를 찾지 못했습니다. 다음 파일이 존재하는지 확인하세요.<br/><br/><span style="word-wrap:break-word">${programPath}</span>`);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const testNumbers = [4, 24, 25, 30];
    let results = [];
    for (let i = 0, l = testNumbers.length; i < l; i++) {
      let result = await executeCodeString(TQ_NODE_EXE, userCode, [testNumbers[i]]);
      let n = result.stdout ? result.stdout.trim() : "";
      results.push(n);
    }

    for (let i = 0, l = results.length; i < l; i++) {
      let result = results[i];
      let correct = correctDecrypt(testNumbers[i]);
      if (result !== correct) {
        return helper.fail(`스크립트에 "${testNumbers[i]}"을(를) 전달했을 때 "${correct}" 대신 "${result}"이(가) 출력되었습니다. 다시 테스트하세요.`);
      }
    }

    helper.success("해냈습니다! 어떤 면접용 함정 문제도 속일 수 없겠군요.");
  } catch (e) {
    helper.fail(`JavaScript 코드를 실행하는 중 오류가 발생했습니다. 직접 실행되는지 확인하고 다시 시도하세요.<br/><br/>${e}`);
  }
};

const assert = require("assert");
const ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE = "하나 이상의 배열 요소 값 또는 자료형이 다릅니다.";
const createDefaultErrorMessage = (expected, input, testResult, helper) => {
  const expectedFormatted = helper.formatByType(expected);
  const inputFormatted = helper.formatByType(input);
  const testResultFormatted = helper.formatByType(testResult);
  return `입력 ${inputFormatted}에서 ${expectedFormatted}을(를) 예상했지만 ${testResultFormatted}을(를) 받았습니다.`;
};
const assertTestCase = (fn, helper) => (input, expected) => {
  const result = fn(input);
  const areEqualStrings = Object.is(String(result).toLowerCase(), String(expected).toLowerCase());
  const areEqualArrays = Array.isArray(expected) && Array.isArray(result) && helper.areArrayContentsEqual(expected, result, (element, otherElement) => {
    if (!Object.is(element, otherElement)) assert.fail(ARRAY_ELEMENT_DIFFERENT_ERROR_MESSAGE);
    return true;
  });
  if (!areEqualStrings && !areEqualArrays) assert.fail(createDefaultErrorMessage(expected, input, result, helper));
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["flattenArray"], "flatten-array");
    assert(context.flattenArray, "flattenArray 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.flattenArray, helper);
    test([], "Pure Ducktypium!");
    test([1, "two", 3, "four"], [1, "two", 3, "four"]);
    test([1, 3, 3, 7, ["legacy wuz here"]], [1, 3, 3, 7, "legacy wuz here"]);
    test(["python", ["javascript", ["api", ["messaging"]]]], ["python", "javascript", "api", "messaging"]);
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

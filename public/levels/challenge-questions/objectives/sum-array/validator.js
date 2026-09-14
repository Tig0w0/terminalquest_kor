const assert = require("assert");
const assertTestCase = (fn) => (input, expected) => {
  const result = fn(input);
  assert.strictEqual(result, expected, `입력 "${input}"에서 "${expected}"을(를) 예상했지만 "${result}"을(를) 받았습니다.`);
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["sumArray"], "sum-array");
    assert(context.sumArray, "sumArray 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.sumArray);
    test([1, 2, 3], 6); test([-1, 0, 1], 0); test([1.2, 2.3, 4], 7.5);
    test([1, 1, 2, 3, 5, 8, 13], 33); test([], 0); test([3], 3);
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

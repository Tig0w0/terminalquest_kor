const assert = require("assert");
const assertTestCase = (fn) => (input, expected) => {
  const result = fn(input);
  assert.strictEqual(result, expected, `입력 "${input}"에서 "${expected}"을(를) 예상했지만 "${result}"을(를) 받았습니다.`);
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["differenceMinMax"], "difference-max-min");
    assert(context.differenceMinMax, "differenceMinMax 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.differenceMinMax);
    test([1, 2, 3, 4, 5], 4); test([100, 0], 100); test([3.3, 5, -2, 5], 7); test([8, 1.2, 5, 9], 7.8);
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

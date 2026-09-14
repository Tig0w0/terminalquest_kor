const assert = require("assert");
const assertTestCase = (fn) => (input, expected) => {
  const result = fn(input);
  assert.strictEqual(result, expected, `입력 "${input}"에서 "${expected}"을(를) 예상했지만 "${result}"을(를) 받았습니다.`);
};
module.exports = async function (helper) {
  try {
    const context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(["reverseSentence"], "reverse-words");
    assert(context.reverseSentence, "reverseSentence 함수가 정의되지 않았습니다!");
    const test = assertTestCase(context.reverseSentence);
    test("You did it!", "It did you!");
    test("Apple fell far from the tree.", "Tree the from far fell apple.");
    test("Tacos in Mexico are tasty.", "Tasty are Mexico in tacos.");
    test("Hurray!", "Hurray!");
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

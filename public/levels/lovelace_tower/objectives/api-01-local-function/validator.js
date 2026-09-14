const assert = require("assert");

const assertTestCase = (testFunction) => (input1, input2, input3, expected) => {
  const testResult = testFunction(input1, input2, input3);

  assert.strictEqual(
    testResult,
    expected,
    `입력값 "${input1}", "${input2}", "${input3}"에서 "${expected}"을(를) 예상했지만 "${testResult}"을(를) 받았습니다.`
  );
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["swapStrings"],
      "api-01-local-function"
    );

    assert(context.swapStrings, "swapStrings 함수가 정의되지 않았습니다!");

    const test = assertTestCase(context.swapStrings);

    test(
      "foo foo foo something something bar",
      "foo",
      "bar",
      "bar bar bar something something bar"
    );
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("잘했습니다!");
};

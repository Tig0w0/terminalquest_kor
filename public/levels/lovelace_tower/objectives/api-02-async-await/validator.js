const assert = require("assert");
const { readdirSync } = require("fs");

const assertTestCase = (testFunction) => async (input, expected) => {
  const testResult = await testFunction(input);

  assert.strictEqual(
    testResult,
    expected,
    `"${expected}"을(를) 예상했지만 "${testResult}"을(를) 받았습니다.`
  );
};

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["findLastFileInDir"],
      "api-02-async-await"
    );

    assert(
      context.findLastFileInDir,
      "findLastFileInDir 함수가 정의되지 않았습니다!"
    );

    const test = assertTestCase(context.findLastFileInDir);
    const testDirectory = `${__dirname}/houses`;
    const dir = readdirSync(testDirectory);
    const lastEntry = dir[dir.length - 1];

    await test(testDirectory, lastEntry);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("잘했습니다!");
};

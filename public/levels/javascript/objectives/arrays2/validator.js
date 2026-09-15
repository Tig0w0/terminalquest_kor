const {
  evaluteAssertions,
} = require("../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation");

const EXAMPLE_FILE_NAME = "addFirstToLast.js";

module.exports = async (helper) => {
  try {
    const passed = await evaluteAssertions(
      helper,
      EXAMPLE_FILE_NAME,
      `
        expectFunctionResultToBe('addFirstToLast', 'firstthird', [[
          'first',
          'second',
          'third',
        ]]);
        expectFunctionResultToBe('addFirstToLast', 'goldenterrier', [[
          'golden',
          'terrier',
        ]]);
        expectFunctionResultToBe('addFirstToLast', 
          'cheeriocheerio', [['cheerio']]);
        expectFunctionResultToBe('addFirstToLast', '', [[]]);
      `
    );

    if (passed) {
      helper.success(`
        성공입니다! 이제 에어록을 통과하여 <strong>Infinite Loop</strong> 호에
        탑승할 수 있습니다.
      `);
    }
  } catch (e) {
    helper.fail(`
      여러분의 문자열 연결 함수를 실행하는 중 무언가 문제가 발생했습니다: <br/><br/>
      ${e}
    `);
  }
};

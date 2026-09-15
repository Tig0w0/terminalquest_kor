const {
  evaluteAssertions,
} = require("../../../../node_modules/twilioquest-javascript/scripts/objectiveValidation");

const EXAMPLE_FILE_NAME = "getFirstAmountSorted.js";

module.exports = async (helper) => {
  try {
    const passed = await evaluteAssertions(
      helper,
      EXAMPLE_FILE_NAME,
      `
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['first', 'second'],
          [['third', 'second', 'first'], 2]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['golden'],
          [['golden', 'terrier'], 1]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['apple jacks', 'cheerios', 'lucky charms'],
          [['cheerios', 'apple jacks', 'lucky charms'], 3]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          [],
          [['golden', 'terrier', 'boxer'], 0]
        );
      `
    );

    if (passed) {
      helper.success(`
        테스트 배열의 특정 부분을 정확하게 정렬하고 선택해 내셨군요! 배열을 다루는 
        이 기술은 앞으로의 과정에서 매우 유용하게 쓰일 것입니다.
      `);
    }
  } catch (e) {
    helper.fail(`여러분의 배열 자르기 및 정렬 함수를 실행하는 중 오류가 발생했습니다.
    
    ${e}`);
  }
};

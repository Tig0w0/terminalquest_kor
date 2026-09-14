module.exports = async helper => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (!answer1 || !answer2) {
    return helper.fail('두 질문에 모두 답하세요!');
  }

  if (answer1 !== 'interface') {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. API는
      Application Programming Interface의 약자입니다.
    `);
  }

  if (answer2.indexOf('touppercase') !== 0) {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. JavaScript에서는 객체를 참조하는 변수
      뒤에 "." 연산자를 붙여 함수를 선택하고, 여는 괄호와 닫는 괄호 "()"를
      붙여 호출합니다. 객체는 이런 함수를 통해 API를 제공합니다. 예제에서
      문자열을 모두 대문자로 바꾸는 API 함수의 이름을 확인하세요.
    `);
  }

  return helper.success(`
    정답입니다! 튜링 기숙사의 지식 상자를 열었습니다.
  `);
};

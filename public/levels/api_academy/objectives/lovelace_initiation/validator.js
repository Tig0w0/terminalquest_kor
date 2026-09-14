module.exports = async helper => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail('두 질문에 모두 답하세요!');
  }

  if (answer1 !== 'http') {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. 브라우저 주소 표시줄에 웹사이트의
      URL을 입력했을 때 맨 앞에 붙는 네 글자를 떠올려 보세요.
    `);
  }

  if (answer2.indexOf('header') < 0) {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. 웹 요청에 함께 담기는 이 추가 정보의
      이름은 "footer"의 반대말이라고 생각하면 찾기 쉽습니다.
    `);
  }

  return helper.success(`
    정답입니다! 러브레이스 기숙사의 지식 상자를 열었습니다.
  `);
};

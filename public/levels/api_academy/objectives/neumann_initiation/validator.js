module.exports = async helper => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail('두 질문에 모두 답하세요!');
  }

  if (answer1 !== 'resource') {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. RESTful API에서 HTTP로 접근할 수 있는
      객체의 이름은 "URL"에서 "R"이 나타내는 단어입니다.
    `);
  }

  if (answer2 !== 'post') {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. 영상에서 크레이그는 CRUD 작업인
      Create, Read, Update, Delete를 HTTP method에 대응해 설명합니다.
      새 데이터를 만드는 Create에 해당하는 method를 다시 확인하세요.
    `);
  }

  return helper.success(`
    정답입니다! 폰 노이만 기숙사의 지식 상자를 열었습니다.
  `);
};

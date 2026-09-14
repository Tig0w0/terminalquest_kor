module.exports = async helper => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail('두 질문에 모두 답하세요!');
  }

  if (answer1 !== 'false') {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. 원격 API는 네트워크의 다른 컴퓨터,
      즉 서버에 있는 코드와 컴퓨팅 자원을 사용할 수 있습니다.
    `);
  }

  if (!answer2 || answer2 !== 'rest') {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. 찾는 약어를 풀어 쓰면
      "Representational State Transfer(표현 상태 전이)"입니다.
      크레이그의 영상에서 네 글자 약어를 다시 확인하세요.
    `);
  }

  return helper.success(`
    정답입니다! 호퍼 기숙사의 지식 상자를 열었습니다.
  `);
};

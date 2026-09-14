module.exports = async helper => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');

  if (answer1 === '' || answer2 === '') {
    return helper.fail('두 과제 질문에 모두 답하세요!');
  }

  if (
    !answer1.includes('message') &&
    !answer1.includes('media') &&
    !answer1.includes('service')
  ) {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. API Reference에서 Message, Media,
      Service 중 하나의 Resource를 찾아 영문으로 입력하세요.
    `);
  }

  if (!answer2 || answer2 !== 'body') {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. Message Resource 문서에서 가장 먼저
      나열된 property를 확인하세요.
    `);
  }

  return helper.success(`
    정답입니다! 상자를 열어 지팡이를 얻었습니다. 이제 API 아카데미 곳곳에서
    주문을 배우고 시전할 수 있습니다!
  `);
};

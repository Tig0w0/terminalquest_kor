module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');
  const answer3 = helper.getNormalizedInput('answer3');

  if (answer1 === '' || answer2 === '' || answer3 === '') {
    return helper.fail(`
      모든 도전 문제에 답하세요!
    `);
  }

  // if (!answer1.includes('message') && !answer1.includes('media') && !answer1.includes('service')) {
  //   return helper.fail(`
  //     The first answer is incorrect.
  //   `);
  // }

  if (answer1 !== 'software development kit') {
    return helper.fail(`
      첫 번째 문제의 정답은 Software Development Kit입니다.
    `);
  }

  if (answer2 !== 'b') {
    return helper.fail(`
      두 번째 문제의 답이 틀렸습니다. Twilio는 선택한 프로그래밍 언어의 사용자를 위한 서버 측 헬퍼 라이브러리를 제공합니다.
    `);
  }

  if (answer3 !== 'true') {
    return helper.fail(`
      세 번째 문제의 답이 틀렸습니다. 라이브러리는 서버와 반복해서 주고받는 일반적인 저수준 상호작용을 처리하여 API 작업을 더 쉽게 만들어 줍니다.
    `);
  }

  // if (!answer2 || answer2 !== 'body') {
  //   return helper.fail(`
  //     The second answer is incorrect.
  //   `);
  // }

  return helper.success(`
    정답입니다! 튜링 기숙사의 열쇠 주문 조각을 얻었습니다!
  `);
};

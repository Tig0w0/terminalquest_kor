const assert = require("assert");

module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');
  const answer3 = helper.getNormalizedInput('answer3');
  const answer4 = helper.getNormalizedInput('answer4');

  const { TQ_TWILIO_ACCOUNT_SID:accountSid, TQ_TWILIO_AUTH_TOKEN: authToken } = helper.env;

  if (answer1 === '' || answer2 === '' || answer3 === '' || answer4 === '') {
    return helper.fail(`
      모든 도전 문제에 답하세요!
    `);
  }

  if (answer1 !== "confirm") {
    return helper.fail(`
      Postman 계정을 만들고 웹 인터페이스 또는 앱을 열었다는 것을 확인하려면 첫 번째 문제에 'confirm'을 입력하세요. 문제가 있다면 링크된 동영상이나 블로그 글을 확인하세요.
    `);
  }

  if (answer2 !== "false") {
    return helper.fail(`
      두 번째 문제의 답은 false입니다. Postman의 "collection"은 쉽게 재사용할 수 있도록 관련 HTTP 요청을 묶어 놓은 것입니다.
    `);
  }

  if (answer3 !== "authorization") {
    return helper.fail(`
      세 번째 문제의 답이 정확하지 않습니다. 복도에 있는 석상이 단서를 줄지도 몰라요…
    `);
  }

  if (answer4 !== "b") {
    return helper.fail(`
      네 번째 문제의 답이 틀렸습니다. 다시 시도하세요.
    `);
  }

  // try {
  //   const client = require('twilio')(accountSid, authToken);

  //   const message = await client
  //                   .messages(messageSid)
  //                   .fetch();

  //   console.log(message.body)

  //   if (message.body !== 'Postman rocks!' && message.body !== 'postman rocks!' && message.body !== 'postman rocks') {
  //     throw 'Try again, and make sure your message says `Postman rocks!`';
  //   }
  // } catch (e) {
  //   return helper.fail(`Uh oh: ${e}`);
  // }

  return helper.success(`
    정답입니다! Postman으로 API를 테스트하는 방법을 훌륭하게 증명했습니다. 호퍼 열쇠 주문 조각을 얻었습니다.
  `);
};

const assert = require("assert");

module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput('answer1');
  const answer2 = helper.getNormalizedInput('answer2');
  const { answer3:messageSid } = helper.validationFields;

  const { TQ_TWILIO_ACCOUNT_SID:accountSid, TQ_TWILIO_AUTH_TOKEN: authToken } = helper.env;

  if (answer1 === '' || answer2 === '' || !messageSid) {
    return helper.fail(`
      모든 도전 문제에 답하세요!
    `);
  }

  if (answer1 !== "true") {
    return helper.fail(`
      첫 번째 문제의 답은 true입니다. Twilio Programmable SMS API에 요청하려면 인증 정보가 필요합니다. 요청에 Account SID와 Auth Token을 포함해야 합니다.
    `);
  }

  if (answer2 !== 'to' ) {
    return helper.fail(`
      거의 맞았습니다! Twilio Programmable SMS로 메시지를 만드는 데 필요한 세 번째 매개변수는 \`To\`입니다. 이 매개변수는 메시지를 누구에게 보낼지 API에 알려 줍니다.
    `);
  }

  try {
    const client = require('twilio')(accountSid, authToken);

    const message = await client
                    .messages(messageSid)
                    .fetch();

    if (!message.sid) {
      throw '문제가 발생한 것 같습니다. 다시 시도하세요.'
    }
  } catch (e) {
    console.log(e);
    return helper.fail(`이런, 이 SID에 해당하는 메시지를 찾을 수 없습니다. 메시지가 성공적으로 전송되었나요?`);
  }

  return helper.success(`
    정답입니다! API의 힘을 다뤄 cURL과 Twilio Programmable SMS로 메시지를 만들었습니다. 러브레이스 열쇠 주문 조각을 얻었습니다.
  `);
};

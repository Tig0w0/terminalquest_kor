const twilio = require('twilio');

module.exports = (context, callback) => {
  const { accountSid, authToken } = context.validationFields;

  if (!accountSid || !authToken) {
    return callback({
      message: `Account SID와 Auth Token이 필요합니다. 제공된 입력란에 두 값을 모두 입력하세요.`,
    });
  }

  let client;

  try {
    client = twilio(accountSid, authToken);
  } catch (e) {
    return callback({
      message: `유효한 Twilio Account SID가 필요합니다. twilio.com/console에서 확인할 수 있으며 "AC"로 시작합니다.`,
    });
  }

  client.api.accounts(accountSid).fetch((err, response) => {
    console.log(err, response);
    if (err) {
      callback({
        message: `진실의 석상이 Twilio 인증 정보를 확인하지 못했습니다. 값이 정확한지 확인한 뒤 다시 시도하세요.`,
      });
    } else {
      callback(null, {
        message: `인증 정보가 승인되었습니다. 진실의 석상이 나중에 사용할 수 있도록 저장합니다.`,
        env: [
          { name: 'TWILIO_ACCOUNT_SID', value: accountSid },
          { name: 'TWILIO_AUTH_TOKEN', value: authToken, concealed: true },
        ],
      });
    }
  });
};

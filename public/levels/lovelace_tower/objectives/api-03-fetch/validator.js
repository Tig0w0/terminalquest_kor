const {
  MAGIC_API_ENDPOINT,
} = require('../../../../node_modules/twilioquest-api-academy/scripts/config');

module.exports = async function (helper) {
  try {
    const { magicalPhrase } = helper.validationFields;
    const response = await fetch(MAGIC_API_ENDPOINT);
    const correctMagicPhrase = await response.text();

    if (!magicalPhrase) {
      return helper.fail(
        "TwilioQuest가 마법 문구를 찾지 못했습니다! 입력란에 문구를 붙여 넣었는지 확인한 뒤 다시 시도하세요!"
      );
    }

    if (magicalPhrase.toLowerCase() !== correctMagicPhrase.toLowerCase()) {
      return helper.fail(
        `마법 문구 "${magicalPhrase}"이(가) 예상한 "${correctMagicPhrase}"와 일치하지 않습니다. 올바른 엔드포인트에서 가져왔는지 확인한 뒤 다시 시도하세요!`
      );
    }

    helper.success(
      "TwilioQuest가 마법 문구를 찾아 아카데미에서 진위를 확인했습니다. 훌륭합니다!"
    );
  } catch (err) {
    helper.fail(err);
    return;
  }
};

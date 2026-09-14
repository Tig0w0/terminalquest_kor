const { DIVINATION_API_ENDPOINT } = require("../../../../scripts/config");
const assert = require("assert");

const assertTestCase = (testFunction, helper) => async (input) => {
  await testFunction(input);

  // 이 과제의 엔드포인트 문제를 우회하기 위한 임시 fetchOverride 메서드입니다.
  // 자세한 내용은 twilio/twilioquest 저장소의 ValidationHelper 클래스를 참고하세요.
  const response = await helper.fetchOverride(
    `${DIVINATION_API_ENDPOINT}?target=lovelace_secret_statue&guid=${input}`
  );
  let patchedInscription = await response.json();

  if (patchedInscription.errorMessage) {
    assert.fail(patchedInscription.errorMessage);
  }

  if (!patchedInscription.data.operational) {
    assert.fail(
      "PATCH한 비문이 아직 손상되어 있습니다! 보내는 내용을 다시 확인한 뒤 재시도하세요."
    );
  }
};

function generateRandomID() {
  // https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13#:~:text=const%20uid%20%3D%20()%20%3D%3E%0A%20%20String(%0A%20%20%20%20Date.now().toString(32)%20%2B%0A%20%20%20%20%20%20Math.random().toString(16)%0A%20%20).replace(/%5C./g%2C%20%27%27)
  let randomID =
    Date.now().toString(32) + Math.random().toString(16).replace(/\./g, "");

  return randomID;
}

module.exports = async function (helper) {
  let context;

  try {
    context = await helper.pullVarsFromQuestIdeUserCodeLocalScope(
      ["getAndPatchCorruptedInscription"],
      "api-05-get-patch"
    );

    assert(
      context.getAndPatchCorruptedInscription,
      "getAndPatchCorruptedInscription 함수가 정의되지 않았습니다!"
    );

    const test = assertTestCase(
      context.getAndPatchCorruptedInscription,
      helper
    );
    const randomID = generateRandomID();
    await test(randomID);
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("잘했습니다!");
};

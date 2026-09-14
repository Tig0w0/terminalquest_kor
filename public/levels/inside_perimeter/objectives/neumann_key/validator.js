function isValidAnswer1Option(answer1, answer1OptionsMap) {
  return Object.keys(answer1OptionsMap).some(
    (option) =>
      option === answer1 || answer1OptionsMap[option].toLowerCase() === answer1
  );
}

module.exports = async (helper) => {
  const answer1 = helper.getNormalizedInput("answer1");
  const answer2 = helper.getNormalizedInput("answer2");
  const answer3 = helper.getNormalizedInput("answer3");
  const answer1OptionsMap = {
    a: "GET",
    b: "POST",
    c: "UPDATE",
    d: "DELETE",
  };

  if (!answer1 || !answer2 || !answer3) {
    return helper.fail(`
      모든 문제에 답하세요!
    `);
  }

  if (!isValidAnswer1Option(answer1, answer1OptionsMap)) {
    return helper.fail(
      `"${answer1}"은(는) 올바른 답이 아닙니다! "a", "b", "c", "d" 중 하나를 선택하세요!`
    );
  }

  if (answer1 !== "c" && answer1 !== "update") {
    // Because of the "isValidAnswer1Option" check, we know that the player either entered a single letter answer
    // or one of the labels (i.e. GET, POST, UPDATE, DELETE). If the player typed in a letter, it'll get the correct
    // verb mapping, otherwise it'll uppercase the input.
    return helper.fail(`
      이런, 첫 번째 문제의 답이 틀렸습니다. "${
        answer1OptionsMap[answer1] || answer1.toUpperCase()
      }"은(는) HTTP 메서드가 <b>맞습니다</b>. <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">MDN 문서에서 HTTP 메서드를 자세히 알아보거나</a> 해킹 인터페이스의 정보를 확인하세요.
    `);
  }

  if (answer2 !== "get") {
    let failMessage;

    if (answer2 === "post")
      failMessage =
        "POST는 요청 페이로드에 담은 새 정보를 서버에 제출할 때 사용합니다.";
    if (answer2 === "put")
      failMessage =
        "PUT은 서버의 대상 리소스를 요청에 담은 새 데이터로 교체할 때 사용합니다.";
    if (answer2 === "read") failMessage = "READ는 올바른 HTTP 메서드가 아닙니다.";

    return helper.fail(`
      두 번째 문제의 답이 정확하지 않습니다! ${failMessage} <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">MDN 문서에서 HTTP 메서드를 자세히 알아보거나</a> 해킹 인터페이스의 정보를 확인하세요.
    `);
  }

  if (answer3 !== "post") {
    return helper.fail(`
      세 번째 문제의 답이 틀렸습니다. <a href="https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource">메시지 생성에 관한 Twilio Programmable SMS 문서</a>에서 답을 찾아보세요!
  `);
  }

  return helper.success(`
    정답입니다! 올바른 HTTP 메서드로 목표를 효율적으로 달성하고 문제를 해결할 수 있음을 증명했습니다. 폰 노이만 열쇠 주문 조각을 얻었습니다.
  `);
};

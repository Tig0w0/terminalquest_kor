module.exports = async function (helper) {
  try {
    const words = helper.getNormalizedInput("words");
    const correctWordOrder = ["jah", "vuh", "skrept"];
    const validWords = ["skrept", "jah", "vuh"];
    const playerWords = words.split(" ");
    if (playerWords.length === 1 && playerWords[0] === "") {
      helper.fail(`단어가 없습니다! '${validWords.join(" ")}'처럼 공백으로 구분한 하나의 문자열을 입력하세요.`); return;
    }
    if (playerWords.length !== correctWordOrder.length) {
      helper.fail(`하나 이상의 단어가 빠졌습니다! 다음 세 단어를 모두 사용하세요: ${validWords.join(", ")}`); return;
    }
    if (playerWords.some(word => !validWords.includes(word))) {
      helper.fail(`유효하지 않은 단어가 있습니다! 사용할 수 있는 단어: ${validWords.join(" ")}.`); return;
    }
    if (!correctWordOrder.every((word, idx) => word === playerWords[idx])) {
      helper.fail("단어의 순서가 올바르지 않습니다!"); return;
    }
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

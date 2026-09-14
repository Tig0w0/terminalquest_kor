module.exports = async function (helper) {
  try {
    const color = helper.getNormalizedInput("color");
    if (!color) { helper.fail("항아리 색을 입력하세요!"); return; }
    const validColors = ["gray", "white and green", "terracotta"];
    if (!validColors.includes(color)) {
      helper.fail(`입력한 "${color}"은(는) 유효하지 않습니다. gray, white and green, terracotta 중 하나를 입력하세요.`); return;
    }
    if (color !== "gray" && color !== "grey") {
      helper.fail("그 항아리는 함정이었습니다! 세드릭이 가까스로 다치지 않았습니다!"); return;
    }
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

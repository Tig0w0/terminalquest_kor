module.exports = async function (helper) {
  try {
    const instructions = helper.getNormalizedInput("instructions");
    const validInstructions = ["up", "down", "left", "right"];
    const playerInstructions = instructions.split(" ");
    const correctInstructions = ["left", "left", "down", "down", "left", "left", "left", "left", "up", "up", "up"];
    if (playerInstructions.length === 1 && playerInstructions[0] === "") {
      helper.fail("지시가 없습니다! 'left left left'처럼 공백으로 구분한 하나의 문자열로 입력하세요."); return;
    }
    if (playerInstructions.some(instruction => !validInstructions.includes(instruction))) {
      helper.fail(`유효하지 않은 지시가 있습니다! 사용할 수 있는 지시: ${validInstructions.join(" ")}.`); return;
    }
    for (let i = 0; i < correctInstructions.length; i += 1) {
      if (playerInstructions[i] !== correctInstructions[i]) {
        let message = "입력한 지시로는 세드릭이 사원 문에 도착하지 못했습니다!";
        if (i === 0) message += ` 첫 지시는 '${playerInstructions[i]}'이(가) 아니라 'left'여야 합니다.`;
        else message += ` 처음 ${i}개 지시는 맞았습니다: '${playerInstructions.slice(0, i).join(" ")}'.`;
        helper.fail(message); return;
      }
    }
  } catch (err) { helper.fail(err); return; }
  helper.success("해냈습니다!");
};

module.exports = async (helper) => {
  try {
    const { puzzlePassword } = helper.validationFields;
    const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;

    // The player needs to unlock all the security nodes first
    if (
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[0] ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[1] ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[2] ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[3] ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[4] ||
      !TQ_JAVASCRIPT_WORLD_STATE.eastWingSecNodes[5]
    ) {
      return helper.fail(`
        비밀번호를 추측하기 전에 먼저 6개의 보안 노드를 모두 잠금 해제해야 합니다.
        Infinite Loop 내부를 마저 탐험하여 나머지 노드들을 찾아보세요.
        <br/><br/>
        현재까지 찾은 인덱스들은 "과제(Objective)" 탭에서 확인할 수 있습니다.
      `);
    }

    if (!puzzlePassword || puzzlePassword.trim() !== "F!N!TE") {
      return helper.fail(`
        비밀번호가 틀렸습니다 - 입력하신 문자의 대소문자를 확인하고, 
        "과제" 탭에 있는 2차원 배열을 참고하여 올바른 문자를 사용했는지 다시 한번 
        확인해 보세요.
      `);
    }

    helper.success(`
      성공했습니다! 레이저 장벽이 사라지고, 앞으로 나아가 
      전기 엔지니어와 대화할 수 있게 되었습니다.
    `);
  } catch (e) {
    helper.fail(`
      비밀번호를 처리하는 중 오류가 발생했습니다.
    `);
  }
};

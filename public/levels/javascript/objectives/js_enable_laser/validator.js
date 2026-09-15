module.exports = async (helper) => {
  try {
    const { laserPassword } = helper.validationFields;
    const { TQ_JAVASCRIPT_WORLD_STATE } = helper.context.levelState;

    // The player needs to find the password first
    if (!TQ_JAVASCRIPT_WORLD_STATE.room1.passwordFound) {
      return helper.fail(`
        올바른 비밀번호 없이는 레이저를 재부팅할 수 없습니다. 수석 과학자에게 
        말을 걸어 필요한 비밀번호를 알아내세요!
      `);
    }

    if (!laserPassword || laserPassword.trim() !== "PEW PEW PEW!") {
      return helper.fail(`
        비밀번호가 틀렸습니다. 과학자의 책상에서 발견했던 비밀번호는 
        <strong>PEW PEW PEW!</strong> 였습니다.
      `);
    }

    helper.success(`
      성공입니다! 정지 광선이 번쩍이며 켜지고, 마침내 실험이 시작됩니다! 
      잠깐... 방금 무슨 우르릉거리는 소리가 나지 않았나요?
    `);
  } catch (e) {
    helper.fail(`
      비밀번호를 처리하는 중 오류가 발생했습니다.
    `);
  }
};

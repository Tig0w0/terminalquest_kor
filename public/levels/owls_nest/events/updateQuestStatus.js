const LEVEL = 'owls_nest';
const TITLE = '아울의 둥지를 떠나며';

module.exports = function updateQuestStatus(event, world, worldState) {
  let description = `
    WASD 또는 방향키로 이동하고 스페이스바로 상호작용하세요. 파란 스위치를
    작동시키세요!
  `;
  let complete = false;

  if (worldState.movementSwitch) {
    description = `
      받침대에서 해킹 도구를 얻고 보안 터미널을 해킹해 레이저 장벽을
      우회하세요.
    `;
  }

  if (worldState.firstObjectiveHacked) {
    description = `
      케빈과 세드릭에게 말을 건 다음 포그 아울의 지휘권을 넘겨받으세요!
    `;
  }

  if (worldState.fredricThreatReceived) {
    description = `
      라이언에게서 자폭 해제 코드를 가져오세요! 소화기가 필요합니다.
    `;
  }

  if (worldState.ryanSaved) {
    description = `
      해제 코드를 사용해 포그 아울의 자폭 시퀀스를 중단하세요!
    `;
  }

  if (worldState.missionComplete) {
    description = `
      포그 아울에 올라 모험을 시작하세요!
    `;
    complete = true;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
};

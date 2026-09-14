const LEVEL = "tower_exterior";
const TITLE = `탑 안으로`;

function updateQuestStatus({
  event,
  world,
  worldState,
  TOOLBOX_COUNT_TO_FIND,
}) {
  let description = `
    무한 지식의 탑 입구를 찾아라!
  `;
  let complete = false;

  if (worldState.towerExterior.hasStartedInitialTowerTween) {
    description = `
      탑 안으로 들어갈 방법을 알아내자.
    `;
  }

  if (worldState.towerExterior.toolboxesFound.length > 0) {
    description = `
      나머지 공구 상자를 찾아라!
    `;
  }

  console.log({
    worldState,
    len: worldState.towerExterior.toolboxesFound.length,
  });
  if (worldState.towerExterior.toolboxesFound.length >= TOOLBOX_COUNT_TO_FIND) {
    description = `
      클라우드 탐험가와 다시 이야기하자.
    `;
  }

  if (worldState.towerExterior.openedPainPointCollector) {
    description = `
      이제 탑 안으로 들어갈 시간이다!
    `;
    complete = true;
  }

  world.updateQuestStatus(LEVEL, TITLE, description, complete);
}

module.exports = updateQuestStatus;

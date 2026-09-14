function joinStringsWithOxfordComma(strings) {
  return strings.join(', ');
}

module.exports = function processInitiationEvents(event, world, worldState) {
  if (event.name === 'mapDidLoad' && event.mapName === 'maze') {
    worldState.enteredMazeFirstTime = true;
  }

  if (!worldState.enteredMazeFirstTime) {
    return;
  }

  if (
    event.name === 'levelDidLoad' ||
    event.name === 'mapDidLoad' ||
    event.name === 'objectiveCompleted' ||
    event.name === 'objectiveCompletedAgain'
  ) {
    const completedHouses = [];

    if (world.isObjectiveCompleted('hopper_initiation')) {
      world.showEntities('hopper_initiation_flame');
      completedHouses.push('호퍼');
    }

    if (world.isObjectiveCompleted('neumann_initiation')) {
      world.showEntities('neumann_initiation_flame');
      completedHouses.push('폰 노이만');
    }

    if (world.isObjectiveCompleted('lovelace_initiation')) {
      world.showEntities('lovelace_initiation_flame');
      completedHouses.push('러브레이스');
    }

    if (world.isObjectiveCompleted('turing_initiation')) {
      world.showEntities('turing_initiation_flame');
      completedHouses.push('튜링');
    }

    if (
      worldState.initiation.lastShownHouseNotification !==
      completedHouses.length
    ) {
      let completedHousesNotification = `
        <i>${joinStringsWithOxfordComma(completedHouses)}</i> 기숙사의 입학 의식을
        완료했습니다. 앞으로 ${4 - completedHouses.length}곳 남았습니다!
      `;

      if (completedHouses.length === 0) {
        completedHousesNotification =
          'API 아카데미에 들어가려면 이 숲에서 상자 네 개를 찾아야 합니다!';
      }

      if (completedHouses.length === 4) {
        completedHousesNotification =
          '모든 기숙사의 입학 의식을 완료했습니다! 이제 성 정문으로 돌아가야겠어요!';
      }

      world.showNotification(completedHousesNotification);
      worldState.initiation.lastShownHouseNotification = completedHouses.length;
    }
  }
};

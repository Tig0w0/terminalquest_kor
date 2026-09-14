const { NAV_MAP_ARROW_KEY } = require('./config');

module.exports = async function handleTutorial(event, world, worldState) {
  if (worldState.hasSeenTutorial) {
    return;
  }

  await world.wait(1000);

  world.disablePlayerMovement();
  await world.tweenCameraToPosition({
    x: 528,
    y: 336,
  });
  world.showNotification(`
    <i>
      여기가 포그 아울이군요!<br/><br/>저 플랫폼은
      <em>항법 시스템(navigation system)</em>인 것 같습니다. 저걸 사용하면
      클라우드의 여러 지역으로 이동할 수 있을 거예요.
    </i>
  `);
  await world.wait(6000);

  await world.tweenCameraToPosition({
    x: 732,
    y: 610,
  });
  world.showNotification(`
    <i>
      이 구역은 가상 현실(VR) 훈련 시뮬레이터인 것 같습니다.<br/><br/>
      <em>기술 역량을 키우는 데</em> 도움이 될 훈련 시뮬레이션이 분명
      있을 거예요!
    </i>
  `);
  await world.wait(6000);

  await world.tweenCameraToPlayer();
  world.showNotification(`
    <i>
      이제 시작해 볼까요!<br/><br/>세드릭과 승무원들에게도 인사해 두면
      좋겠습니다.
    </i>
  `);
  world.enablePlayerMovement();

  worldState.showNavMapArrow = true;
  world.showEntities(NAV_MAP_ARROW_KEY);
  worldState.hasSeenTutorial = true;

  world.analytics &&
    world.analytics.event(
      'Tutorial',
      'Finished Fog Owl Orientation',
      'Fog Owl',
      null,
      '/maps/fog_owl/default',
      'Fog Owl Default Map'
    );
};

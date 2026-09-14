let KC_CONVO_TRIGGERED = false;

const overlayCss = `
#owln_red_alert_overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  opacity: 0;
  animation: owln_pulsate 3s infinite;
}

@keyframes owln_pulsate {
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
}
`;

function createRedAlertDiv() {
  let overlay = document.getElementById('owln_red_alert_overlay');
  if (overlay) {
    overlay.style.display = 'block';
  } else {
    overlay = document.createElement('div');
    overlay.id = 'owln_red_alert_overlay';
    const overlayStyles = document.createElement('style');
    const game = document.getElementById('game');

    overlayStyles.innerHTML = overlayCss;
    document.head.appendChild(overlayStyles);
    game.appendChild(overlay);
  }
}

function destroyRedAlertDiv() {
  const overlay = document.getElementById('owln_red_alert_overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

module.exports = async function handleFredric(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'kevinCedricDialogTrigger' &&
    !worldState.kevinCedricInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 636,
      y: 512,
    });
    await world.wait(1000);

    world.startConversation('kevinCedricDefault', 'cedricNeutral.png');
    KC_CONVO_TRIGGERED = true;
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'kevinCedricDefault' &&
    KC_CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    KC_CONVO_TRIGGERED = false;
  }

  if (!worldState.fredricThreatReceived || worldState.missionComplete) {
    world.hideEntities('fuel_line_fire_right');
    world.hideEntities('fuel_line_fire_left');
    world.hideEntities('fredric_pylon');
    destroyRedAlertDiv();
  } else {
    world.showEntities('fuel_line_fire_right');
    world.showEntities('fuel_line_fire_left');
    world.showEntities('fredric_pylon');
    createRedAlertDiv();
    world.playBackgroundMusic('unsettlingarea_59895b');
    if (event.name === 'mapDidLoad' && event.mapName === 'default') {
      const player = world.__internals.level.player;
      player.sprite.directionFrame = player.directionFrames.UP;
      player.sprite.x = 586;
      player.sprite.y = 600;
    }
  }

  if (event.name === 'levelWillUnload') {
    destroyRedAlertDiv();
  }
};

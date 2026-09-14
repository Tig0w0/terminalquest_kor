module.exports = function handleMovementTutorial(event, world, worldState) {
  if (event.name === 'levelDidLoad') {
    if (!worldState.chiaraInitialGreeting) {
      world.startConversation('chiaraDefault', 'chiaraNeutral.png', 500);
    }
  }

  if (
    event.name === 'playerDidInteract' &&
    event.target.key === 'medbay_switch'
  ) {
    worldState.movementSwitch = true;
  }

  if (worldState.movementSwitch) {
    world.destroyEntities('medbay_switch');
    world.destroyEntities('security_pylon');
    world.hideEntities('floating_arrow_switch');
  }
};

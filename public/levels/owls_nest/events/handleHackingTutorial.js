let M_CONVO_TRIGGERED = false;

module.exports = async function handleHackingTutorial(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'margaretDialogTrigger' &&
    !worldState.margaretInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 720,
      y: 840,
    });
    await world.wait(1000);

    world.startConversation('margaretDefault', 'margaretNeutral.png');
    M_CONVO_TRIGGERED = true;
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'margaretDefault' &&
    M_CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    M_CONVO_TRIGGERED = false;
  }

  const completedObjectives = world.getContext('completedObjectives');
  if (completedObjectives['owls_nest.hacking_tool_objective']) {
    worldState.firstObjectiveHacked = true;
  }
};

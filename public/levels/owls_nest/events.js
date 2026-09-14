const handleMovementTutorial = require('./events/handleMovementTutorial');
const handleHackingTutorial = require('./events/handleHackingTutorial');
const handleFredric = require('./events/handleFredric');
const handleOverride = require('./events/handleOverride');
const updateQuestStatus = require('./events/updateQuestStatus');
const handleSkipPrologue = require('./events/handleSkipPrologue');

const STATE_KEY = 'com.twilioquest.owls_nest';
const DEFAULT_STATE = {
  movementSwitch: false,
  chiaraInitialGreeting: false,
  hackingToolAcquired: false,
  firstObjectiveHacked: false,
  margaretInitialGreeting: false,
  shouldSkipPrologue: false,
};

module.exports = function (event, world) {
  let worldState = world.getState(STATE_KEY) || DEFAULT_STATE;

  handleMovementTutorial(event, world, worldState);
  handleHackingTutorial(event, world, worldState);
  handleFredric(event, world, worldState);
  handleOverride(event, world, worldState);
  updateQuestStatus(event, world, worldState);
  handleSkipPrologue(event, world, worldState);

  if (
    event.name === 'mapDidLoad' &&
    worldState.missionComplete &&
    event.mapName !== 'victory'
  ) {
    window.warp('owls_nest', 'player_entry1', 'victory');
  }

  if (
    event.name === 'mapDidLoad' &&
    worldState.missionComplete &&
    event.mapName === 'victory'
  ) {
    world.startConversation('kevinVictoryInitial', 'kevinNeutral.png', 500);
  }

  world.setState(STATE_KEY, worldState);
};

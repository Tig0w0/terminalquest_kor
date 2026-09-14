const merge = require('lodash.merge');
const packageInfo = require('../../node_modules/twilioquest-api-academy/package.json');
const processInitiationEvents = require('./events/initiation');
const {
  PRE_ACADEMY_STATE_KEY,
} = require('../../node_modules/twilioquest-api-academy/scripts/config');
const updateQuestLogWhenComplete = require('../../node_modules/twilioquest-api-academy/scripts/updateQuestLogWhenComplete');

const INITIAL_STATE = {
  initiation: {
    lastShownHouseNotification: 0,
    enteredMazeFirstTime: false,
  },
};

module.exports = async function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(PRE_ACADEMY_STATE_KEY));

  processInitiationEvents(event, world, worldState);

  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'triggerAcademyGates'
  ) {
    if (worldState.initiation.lastShownHouseNotification === 4) {
      world.showEntities('exit_to_inside');
      world.forEachEntities('door', door => door.state.fsm.action('open'));
    } else {
      world.hideEntities('exit_to_inside');
    }
  }

  updateQuestLogWhenComplete({
    notification:
      '<span class="highlight">API 아카데미</span>에 들어갈 준비가 됐습니다! 정문으로 가야겠어요!',
    log: 'API 아카데미에 들어갈 자격을 증명했습니다!',
    event,
    world,
    worldStateKey: PRE_ACADEMY_STATE_KEY,
    version: packageInfo.version,
    minimumTargetVersion: '1.2.6',
  });

  world.setState(PRE_ACADEMY_STATE_KEY, worldState);
};

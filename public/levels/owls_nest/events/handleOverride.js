module.exports = function handleOverride(event, world, worldState) {
  if (
    event.name === 'objectiveDidOpen' &&
    event.target.objectiveName === 'fire_extinguisher_objective'
  ) {
    worldState.chestFound = true;
  }

  if (worldState.chestFound) {
    world.hideEntities('floating_arrow_chest');
  }

  if (worldState.ryanSaved) {
    world.showEntities('floating_arrow_controls');
  } else {
    world.hideEntities('floating_arrow_controls');
  }
};

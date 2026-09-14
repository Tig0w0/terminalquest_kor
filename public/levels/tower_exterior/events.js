const merge = require("lodash.merge");
const updateQuestStatus = require("./events/updateQuestStatus");
const viewTower = require("./events/viewTower");

const WORLD_STATE_KEY = "com.twilioquest.developer-fundamentals";
const TOOLBOX_COUNT_TO_FIND = 3;
const toolBoxContents = [
  '이 상자에는 "파일 트리"라는 이름의 도표가 들어 있다. 탑 안에는 멋진 숲이라도 있는 걸까?',
  '이 상자에는 "터미널"이라는 이상한 글자 뭉치가 들어 있다. 공룡 시대에는 이런 식으로 컴퓨터를 썼나 보다!',
  '이 상자에는 "셸" 목록이 들어 있다. 해변에서 조개껍데기라도 팔려는 걸까?',
];

const INITIAL_STATE = {
  towerExterior: {
    hasStartedInitialTowerTween: false,
    playerWantsToLearn: "",
    toolboxesFound: [],
    openedPainPointCollector: false,
  },
};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === "playerDidInteract" && event.target.key === "telescope") {
    viewTower(world);
  }

  if (
    event.name === "triggerAreaWasEntered" &&
    event.target.key === "triggerViewTower" &&
    !worldState.towerExterior.hasStartedInitialTowerTween
  ) {
    worldState.towerExterior.hasStartedInitialTowerTween = true;
    viewTower(world);
  }

  if (
    event.name === "playerDidInteract" &&
    event.target.key &&
    event.target.key.includes("toolbox")
  ) {
    const toolBoxKey = event.target.key;

    if (!worldState.towerExterior.toolboxesFound.includes(toolBoxKey)) {
      worldState.towerExterior.toolboxesFound.push(toolBoxKey);
    }

    const toolboxCountFound = worldState.towerExterior.toolboxesFound.length;
    if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
      world.showNotification(
        `${
          toolBoxContents[toolboxCountFound - 1]
        } <br/><br/> <span class="highlight">신규 개발자 고충 수집기</span>를 고치는 데 필요한 공구 상자를 모두 찾았다!`
      );
    } else {
      const remainingToolBoxes = TOOLBOX_COUNT_TO_FIND - toolboxCountFound;

      world.showNotification(
        `${
          toolBoxContents[toolboxCountFound - 1]
        } <br/><br/> <span class="highlight">공구 상자를 ${remainingToolBoxes}개 더 찾아야 한다!</span>`
      );
    }
  }

  worldState.towerExterior.toolboxesFound.forEach((toolBoxKey) => {
    world.hideEntities(toolBoxKey);
  });

  const toolboxCountFound = worldState.towerExterior.toolboxesFound.length;
  if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
    world.destroyEntities("space-explorer-initial");
    world.showEntities("space-explorer-pain-point");
  } else {
    world.showEntities("space-explorer-initial");
    world.hideEntities("space-explorer-pain-point");
  }

  if (
    event.name === "playerDidInteract" &&
    event.target.key === "door-dev-tower"
  ) {
    if (worldState.towerExterior.openedPainPointCollector) {
      world.showNotification("이제 탑이 열렸다!");
    } else if (toolboxCountFound >= TOOLBOX_COUNT_TO_FIND) {
      world.showNotification(
        '<span class="highlight">신규 개발자 고충 수집기</span>를 고쳤으니 이제 <span class="highlight">클라우드 탐험가</span>와 이야기해야 한다!'
      );
    } else {
      world.showNotification(
        "탑의 문은 꿈쩍도 하지 않는다… 주변을 더 살펴보고 문을 열 방법이 있는지 찾아봐야겠다."
      );
    }
  }

  if (worldState.towerExterior.openedPainPointCollector) {
    world.forEachEntities("door-dev-tower", (door) => {
      door.state && door.state.fsm && door.state.fsm.action("open");
      door.interactable = false;
    });
  }

  updateQuestStatus({ event, world, worldState, TOOLBOX_COUNT_TO_FIND });

  world.setState(WORLD_STATE_KEY, worldState);
};

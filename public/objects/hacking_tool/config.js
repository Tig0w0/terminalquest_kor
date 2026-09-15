const STATE_KEY = 'com.twilioquest.owls_nest';

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameRate: 6
    },
    empty: {
      frames: [10],
      frameRate: 1
    }
  },
  spriteSheets: {
    OWLN_hacking_tool: {
      fileName: 'HackingDevicewithPedestal.png',
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'OWLN_hacking_tool',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      const levelState = world.getState(STATE_KEY) || {};
      if (levelState.hackingToolAcquired) {
        self.playAnimation('empty', true);
        self.interactable = false;
      } else {
        self.playAnimation('idle', true);
      }
    },
    onPlayerDidInteract: (self, event, world) => {
      const levelState = world.getState(STATE_KEY) || {};

      if (
        event.target.key === 'hacking_device' &&
        !levelState.hackingToolAcquired
      ) {
        world.showNotification(`
          <i>이 해킹 툴을 사용하면 이 방의 레이저 장벽을 제어하는 <span class="highlight">
          터미널을 해킹</span>할 수 있을 것 같다!</i>
          <br/><br/>
          (사물을 해킹하려면 가까이 다가가서 <span class="highlight">
          Space 키</span>를 눌러 해킹 인터페이스를 엽니다).
        `);

        levelState.hackingToolAcquired = true;
        self.playAnimation('empty', true);
        self.interactable = false;
      }
    },
  }
};

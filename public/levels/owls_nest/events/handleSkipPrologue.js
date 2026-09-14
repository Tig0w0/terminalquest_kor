const SKIP_BUTTON_PROLOGUE_ID = 'skip-prologue-button';
const STYLE_TAG_TITLE = 'skip-button-style-sheet';

module.exports = function handleSkipPrologue(event, world, worldState) {
  if (event.name === 'levelDidLoad' || event.name === 'mapDidLoad') {
    if (document.getElementById(SKIP_BUTTON_PROLOGUE_ID)) {
      return;
    }

    const skipPrologueButton = document.createElement('button');

    skipPrologueButton.textContent = '프롤로그 건너뛰기...';
    skipPrologueButton.id = SKIP_BUTTON_PROLOGUE_ID;

    skipPrologueButton.onclick = () => {
      if (
        window.confirm(
          '남은 프롤로그를 건너뛰고 포그 아울로 바로 이동하시겠습니까?'
        )
      ) {
        world.analytics &&
          world.analytics.event(
            'Prologue',
            'Skipped Prologue',
            "Owl's Nest",
            null,
            '/maps/owls_nest/default',
            "Owl's Nest Default Map"
          );
        worldState.shouldSkipPrologue = true;
        world.warp('fog_owl');
      }
    };

    document.body.appendChild(skipPrologueButton);

    const skipPrologueStyles = document.createElement('style');
    skipPrologueStyles.title = STYLE_TAG_TITLE;

    skipPrologueStyles.innerHTML = `
      #${SKIP_BUTTON_PROLOGUE_ID} {
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;

        font-size: 1.5rem;
        font-family: 'Roboto Mono', Consolas, monospace;

        background-color: transparent;
        color: #777;
        border: none;
      }

      #${SKIP_BUTTON_PROLOGUE_ID}:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `;

    document.head.appendChild(skipPrologueStyles);
  }

  if (event.name === 'levelWillUnload') {
    const skipPrologueButton = document.getElementById(
      SKIP_BUTTON_PROLOGUE_ID
    );
    document.body.removeChild(skipPrologueButton);

    const skipPrologueStyles = document.querySelector(
      `style[title=${STYLE_TAG_TITLE}]`
    );
    document.head.removeChild(skipPrologueStyles);
  }
};

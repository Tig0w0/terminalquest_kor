const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'freighterInventory.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "freighterInventory.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {} 
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.inventory = inventory;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext(Object.assign({}, scriptContext));

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;
    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(`
          코드에 <span class="highlight">inventory</span> 
          변수가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 변수를 찾을 수 없었습니다.
          <br/><br/>
          변수 이름을 "<span class="highlight">inventory</span>"(으)로 
          지정하셨나요? 철자가 틀리지 않았는지 다시 확인해 보세요.
        `);
      } else {
        return helper.fail(`
          코드를 검증하는 데 문제가 발생했습니다. 확인된 오류는 다음과 같습니다:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // It's not an array...
    if (!tq.inventory.some) {
      return helper.fail(`
        "<span class="highlight">inventory</span>" 변수가 
        배열(array)이 아닌 것 같습니다. 변수를 어떻게 정의했는지 다시 확인해 보세요.
      `);
    }

    if (tq.inventory.length !== 5) {
      return helper.fail(`
        "<span class="highlight">inventory</span>" 변수에 
        5개의 아이템이 들어있지 않은 것 같습니다. 과제 탭에서 설명한 대로 
        5개의 문자열이 포함되어야 합니다.
      `);
    }

    // Check for the correct value of the array
    for (let i = 0, l = tq.inventory.length; i < l; i++) {
      const v = tq.inventory[i];
      if (!v || typeof v !== 'string') {
        return helper.fail(`
          배열 안의 아이템 중 하나가 문자열(string)이 아닙니다. 배열 안의 아이템들을 
          다시 확인해 보세요.
        `);
      }

      const test = v.toLowerCase().trim();
      if (i === 0 && test !== 'ducktypium ore') {
        return helper.fail(`
          <span class="highlight">inventory</span> 배열의 첫 번째 아이템은 
          "Ducktypium Ore"여야 합니다. 현재 값은 "${v}" 입니다.
        `);
      }
      if (i === 1 && test !== 'uranium rod') {
        return helper.fail(`
          <span class="highlight">inventory</span> 배열의 두 번째 아이템은 
          "Uranium Rod"여야 합니다. 현재 값은 "${v}" 입니다.
        `);
      }
      if (i === 2 && test !== 'ruthenium isotopes') {
        return helper.fail(`
          <span class="highlight">inventory</span> 배열의 세 번째 아이템은 
          "Ruthenium Isotopes"여야 합니다. 현재 값은 "${v}" 입니다.
        `);
      }
      if (i === 3 && test !== 'concave lens') {
        return helper.fail(`
          <span class="highlight">inventory</span> 배열의 네 번째 아이템은 
          "Concave Lens"여야 합니다. 현재 값은 "${v}" 입니다.
        `);
      }
      if (i === 4 && test !== 'refraction panel') {
        return helper.fail(`
          <span class="highlight">inventory</span> 배열의 다섯 번째 아이템은 
          "Refraction Panel"여야 합니다. 현재 값은 "${v}" 입니다.
        `);
      }
    }

    helper.success(`
      멋집니다! <strong>Infinite Loop</strong> 호의 화물 명세서를 수정했고,
      이제 화물선을 향해 계속 나아갈 수 있습니다.
    `);
  } catch (e) {
    helper.fail(`
      JavaScript 코드를 실행하는 중 오류가 발생했습니다. 명령줄(터미널)에서
      코드가 오류 없이 실행되는지 확인하신 후 다시 시도해 주세요. 
      발생한 오류는 다음과 같습니다: <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};

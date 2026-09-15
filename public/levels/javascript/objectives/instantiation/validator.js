const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function getMissingKeys(expected, actual) {
  return Object.keys(expected).filter(
    expectedKey =>
      !Object.keys(actual).some(actualKey => actualKey === expectedKey)
  );
}

function doesEntryMatch(
  [actualKey, actualValue],
  [expectedKey, expectedValue]
) {
  if (actualKey !== expectedKey) {
    // only compare matching keys
    return false;
  }

  if (actualValue === expectedValue) {
    return true;
  }

  return false;
}

function getObjectKeysWithMismatchedValues(expected, actual) {
  return Object.entries(expected)
    .filter(expectedEntry => {
      return !Object.entries(actual).some(actualEntry =>
        doesEntryMatch(actualEntry, expectedEntry)
      );
    })
    .map(([key]) => key);
}

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      'construction.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        JavaScript 코드 폴더에서 "construction.js" 스크립트를 찾을 수 없습니다. 
        아래 경로에 파일이 생성되어 있는지 확인해 주세요. <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {},
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.construct = construct;
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
          코드 내에 <span class="highlight">construct</span> 
          함수가 정의되지 않은 것 같습니다. 스크립트의 전역(global) 스코프에서 
          해당 함수를 찾을 수 없었습니다.
          <br/><br/>
          함수 이름을 "<span class="highlight">construct</span>"(으)로 
          지정하셨나요? 대소문자나 철자가 틀리지 않았는지 다시 확인해 보세요.
        `);
      } else {
        return helper.fail(`
          코드를 검증하는 데 문제가 발생했습니다. 확인된 오류는 다음과 같습니다:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isFunction(tq.construct)) {
      let message = `
        <span class="highlight">construct</span>이라는 이름의 변수는 
        찾았지만, 호출 가능한 함수가 아닙니다. JavaScript 함수 생성에 대한 
        자세한 안내는 도움말 탭을 참고해 보세요.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = tq.construct('Gene');
      const result2 = tq.construct('Irene');

      if (result1 === undefined || result1 === null) {
        return helper.fail(`
          여러분의 함수가 아직 값을 반환하지 않는 것 같습니다. 함수의 마지막 
          줄인 "}" 바로 앞의 코드는 특정 결과값을 전달하기 위해 
          <span class="highlight">return</span> 키워드를 사용해야 합니다.
          도움말 탭의 예제 코드를 다시 한번 확인해 보세요.
        `);
      }

      if (typeof result1 !== 'object') {
        return helper.fail(`
          여러분의 함수가 객체(object)를 반환하지 않는 것 같습니다. 여러분의 
          함수는 반드시 객체 리터럴(object literal)을 반환해야 합니다.
        `);
      }

      const expected1 = {
        name: 'Gene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      const result1MissingKeys = getMissingKeys(expected1, result1);
      if (result1MissingKeys.length > 0) {
        return helper.fail(`
          여러분이 반환한 객체에 일부 키(key)가 누락된 것 같습니다.
          
          누락된 키들: ${result1MissingKeys}
        `);
      }

      const result1MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected1,
        result1
      );
      if (result1MismatchedKeys.length > 0) {
        return helper.fail(`
          여러분이 반환한 객체의 키(key) 값들 중 일부가 올바르지 않습니다.
          <br/><br/>
          ${result1MismatchedKeys
            .map(key => `"${key}" 키의 값은 ${expected1[key]} 이어야 합니다.`)
            .join('<br/>')}
        `);
      }

      const expected2 = {
        name: 'Irene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      const result2MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected2,
        result2
      );
      if (result2MismatchedKeys.length > 0) {
        return helper.fail(`
          여러분이 반환한 객체의 키(key) 값들 중 일부가 올바르지 않습니다.
          <br/><br/>
          ${result2MismatchedKeys
            .map(key => `"${key}" 키의 값은 ${expected2[key]} 이어야 합니다.`)
            .join('<br/>')}
        `);
      }
    } catch (ee) {
      return helper.fail(`
        construct 함수를 실행하는 중 오류가 발생했습니다. 명령줄(터미널)에서
        여러분의 함수가 문제없이 잘 작동하는지 확인하신 후 다시 시도해 주세요. 
        막히는 부분이 있다면 도움말 탭의 시작 코드를 활용해 보세요. 
        함수를 호출하려다 발생한 오류는 다음과 같습니다: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      해냈습니다! 이 콘솔의 물질 구체화 기능이 성공적으로 복구되었습니다.
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

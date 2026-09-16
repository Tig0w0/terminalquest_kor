const path = require("path");
const esprima = require("esprima");
const { spawn } = require("child_process");
const { remote } = require("electron");
const jetpack = require("fs-jetpack");
const { v4 } = require("uuid");

const appDataPath = path.resolve(remote.app.getPath("appData"), "TwilioQuest");
const codeStoragePath = path.join(appDataPath, "QuestIDE");

// Create a directory to house our javascript code validator
const javascriptValidatorPath = path.join(appDataPath, "javascript_validator");
const javascriptValidatorCodePath = path.join(
  javascriptValidatorPath,
  "validate.js"
);
jetpack.dir(javascriptValidatorPath);

// An error wrapper we can assume to have a nice human readable error message
class NiceError extends Error {
  constructor(message) {
    super(message);
    this.name = "NiceError";
  }
}

// Get path to user code for an objective
function getCodePath(objectiveName) {
  return path.join(
    codeStoragePath,
    "javascript",
    objectiveName,
    "user_code.js"
  );
}

// Get user code for an objective as a string
async function getCode(objectiveName) {
  const savedCodePath = getCodePath(objectiveName);

  const exists = await jetpack.existsAsync(savedCodePath);
  if (!exists) {
    throw new NiceError(`
      저장된 코드를 찾을 수 없습니다 - 에디터를 열고 코드가 제대로 작성되었는지 확인해 주세요.
    `);
  }

  return await jetpack.readAsync(savedCodePath);
}

// Get pre-analyzed user code
async function getAnalyzedCode(objectiveName) {
  const userCode = await getCode(objectiveName);

  try {
    const program = esprima.parseScript(userCode);
    return { userCode, program };
  } catch (e) {
    // This means there's an error parsing the code
    let message = `
      작성하신 코드에 오류가 있는 것 같습니다.
    `;
    if (e.lineNumber) {
      message += `
        <strong style="color:yellow">${e.lineNumber}번 줄</strong>을 
        확인해 보세요. 발견된 오류는 다음과 같습니다: <br/><br/>
        ${e.description}
      `;
    } else {
      message += `
        에디터에서 코드에 오류가 없는지 확인해 보세요 - 코드를 실행하려고 할 때 콘솔에 오류가 표시되나요?
      `;
    }
    throw new NiceError(message);
  }
}

// Execute the given chunk of validation JavaScript code
async function executeCodeString(node, code, args = []) {
  await jetpack.writeAsync(javascriptValidatorCodePath, code);

  return new Promise(async (resolve, reject) => {
    const process = spawn(node, [javascriptValidatorCodePath].concat(args));
    let finished = false;
    let bufferedStdout = "";
    let bufferedStderr = "";

    process.on("error", (e) => {
      reject(
        new NiceError(`
        여러분의 JavaScript 코드를 검증하는 데 문제가 발생했습니다. 다시 시도해 주세요.
      `)
      );
    });

    process.stdout.on("data", (data) => {
      bufferedStdout += `${data}`;
    });

    process.stderr.on("data", (data) => {
      bufferedStderr += `${data}`;
    });

    process.on("close", (code) => {
      finished = true;

      // We don't care about success or failure - let the validation code sort
      // that out
      resolve({
        exitCode: code,
        stdout: bufferedStdout,
        stderr: bufferedStderr,
      });
    });

    setTimeout(() => {
      if (!finished) {
        console.warn("Node.js validation code timed out.");
        reject(
          new NiceError(`
          여러분의 Node.js 코드를 검증하는 데 문제가 발생했습니다 - 다시 시도해 주세요.
        `)
        );
      }
    }, 5000);
  });
}

function throwAssertionError(message) {
  const assertionError = new Error(message);
  assertionError.name = "AssertionError";

  throw assertionError;
}

function doesFunctionExist(functionName) {
  try {
    eval(functionName);
  } catch (err) {
    throwAssertionError(`"${functionName}" 함수가 존재하지 않습니다!`);
  }
}

function expectFunctionResultToBe(
  functionName,
  expectedValue,
  parameters = [],
  customErrorMessage
) {
  doesFunctionExist(functionName);

  const functionUnderTest = eval(functionName);

  const actualValue = functionUnderTest(...parameters);

  console.log(expectedValue, actualValue);

  let comparisonFn;

  if (Array.isArray(expectedValue)) {
    if (!Array.isArray(actualValue)) {
      const errorMessage = `"${functionName}" 함수가 배열을 반환하지 않았습니다! 기대한 반환값은 배열입니다.`;

      throwAssertionError(errorMessage);
    }

    // check array contents comparison, with order respected
    comparisonFn = (expected, actual) =>
      expected.every((val, index) => actual[index] === val);
  } else {
    // basic equality comparisonFn
    comparisonFn = (expected, actual) => expected === actual;
  }

  if (!comparisonFn(expectedValue, actualValue)) {
    const errorMessage =
      customErrorMessage ||
      `"${functionName}" 함수를 인수 [${parameters}] 와(과) 함께 호출했을 때, 기대했던 반환값 "${expectedValue}" 대신 "${actualValue}" 값이 반환되었습니다.`;

    throwAssertionError(errorMessage);
  }
}

async function evaluteAssertions(helper, fileName, assertionsString) {
  const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
  const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, fileName);

  const exists = await jetpack.existsAsync(programPath);
  if (!exists) {
    helper.fail(
      `JavaScript 작업 폴더에서 "${fileName}" 스크립트를 찾을 수 없습니다. "${programPath}" 경로에 파일이 존재하나요?`
    );
    return false;
  }

  const VALIDATION_UUID = v4();

  const VALIDATION_CODE = `
    ${throwAssertionError.toString()}
    ${doesFunctionExist.toString()}
    ${expectFunctionResultToBe.toString()}

    ${assertionsString}
    console.log('${VALIDATION_UUID}');
  `;

  const userCode = await jetpack.readAsync(programPath);
  const testCode = `${userCode}\n\n${VALIDATION_CODE}`;

  const { stdout, stderr } = await executeCodeString(TQ_NODE_EXE, testCode);

  if (stderr.includes("AssertionError")) {
    const [, errorMessage] = stderr.match(/.AssertionError.: (.*)/);

    helper.fail(`
      ${errorMessage}
    `);
    return false;
  }

  if (stderr) {
    const [, errorMessage] = stderr.match(/Error: (.*)/);
    helper.fail(`
      예기치 않은 오류가 발생했습니다!
      
      "${errorMessage}"
    `);
    return false;
  }

  if (!stdout.includes(VALIDATION_UUID)) {
    helper.fail(`
      검증 스크립트가 성공적으로 종료되지 못했으며 Validation UUID: "${VALIDATION_UUID}"를 출력하지 못했습니다.
    `);
    return false;
  }

  return true;
}

// Helper to write script output to a file
async function writeFile(codePath, fileName, args, output) {
  const p = path.dirname(codePath);
  const t = path.join(p, fileName);
  const text =
    `Executing script: ${codePath}\n` +
    `Script arguments: ${args}\n` +
    `Output:\n${output}\n`;
  await jetpack.writeAsync(t, text);
}

// Export public interface
module.exports = {
  NiceError,
  getCodePath,
  getCode,
  getAnalyzedCode,
  executeCodeString,
  throwAssertionError,
  doesFunctionExist,
  expectFunctionResultToBe,
  evaluteAssertions,
};

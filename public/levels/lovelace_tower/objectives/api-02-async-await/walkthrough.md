# 비동기적으로 코드 실행하기

우리가 작성하는 코드는 대부분 값을 즉시 반환하지만\*, 평소보다 오래 걸리는 경우도 있습니다. 이때 JavaScript는 기다리지 않고 나머지 코드를 계속 실행합니다. 뒤의 코드가 아직 기다리는 값에 의존하더라도 말이지요!

NodeJS와 JavaScript로 디렉터리 내용을 읽는 작업이 한 예입니다.

예제 (1):

```js
const { readdir } = require("fs").promises;

const contents = readdir("path/to/directory");
console.log(contents);
```

이 예제는 `readdir`로 디렉터리의 파일과 폴더를 가져와 `contents` 변수에 할당한 뒤 콘솔에 출력합니다. `readdir`가 값을 반환하는 데 시간이 걸리고 JavaScript는 기다리지 않으므로 `console.log`가 예상과 다른 값을 출력할 수 있습니다.

이런 함수를 "비동기 함수"라고 하며 Promise를 반환합니다. 위의 `console.log`는 `Promise { <pending> }`를 출력합니다. `readdir`가 끝날 때까지 시간이 걸리기 때문에 Promise가 필요한 것입니다.

## Promise란 무엇인가요?

Promise는 미래에 얻게 될 값을 나타냅니다. 비동기 함수는 처음에 Promise 객체를 반환하고, 실제 값을 사용할 수 있게 되면 Promise가 "이행(resolve)"되어 그 값으로 바뀝니다. 말 그대로 미래의 값을 주겠다는 **약속(promise)**인 셈이죠!

JavaScript는 Promise를 이용해 프로그램 실행을 제어할 수 있습니다. 작업이 끝날 때까지 멈추거나, 완료된 뒤 호출할 콜백(함수)을 제공할 수 있지요. 각각 `await` 키워드와 `promise.then` 메서드를 사용합니다.

## Promise 연결하기

`promise.then` 메서드에 함수를 전달하면 비동기 작업이 끝난 뒤 그 함수를 호출할 수 있습니다. `promise.then`은 자신이 속한 Promise를 반환하므로 여러 작업을 차례로 연결할 수도 있습니다.

예제 (2):

```js
const { readdir } = require("fs").promises;

readdir("path/to/directory")
  .then((content) => {
    console.log("First:", content);
  })
  .then((content) => {
    console.log("Second:", content);
  });
```

이 예제는 Promise 체이닝으로 비동기 작업의 결과를 처리하는 방법을 보여 줍니다. 이 방식에서는 비동기 작업이 끝날 때까지 다른 코드도 계속 실행될 수 있습니다. 코드의 가독성과 이해를 어렵게 만드는 [콜백 지옥](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#:~:text=the%20classic%20callback-,pyramid%20of%20doom,-%3A)도 유의해야 합니다.

## Promise 기다리기

`await` 키워드를 사용하면 작업이 끝나 결과를 줄 때까지 프로그램을 멈출 수 있습니다.

예제 (3):

```js
const { readdir } = require("fs").promises;

const contents = await readdir("path/to/directory");
console.log(contents);
```

위의 Promise 체이닝 예제와 달리, 여기서는 `readdir` 호출이 끝날 때까지 프로그램이 계속 진행되지 않습니다.

## 디렉터리의 마지막 파일 찾기

이제 과제를 다시 살펴봅시다. `findLastFileInDir` 함수는 `dirPath`라는 인수 하나를 받습니다. 아래처럼 이 변수와 `readdir`, `await`를 함께 사용해 디렉터리의 모든 항목을 가져올 수 있습니다.

```js
const { readdir } = require("fs").promises;

async function findLastFileInDir(dirPath) {
  const allFiles = await readdir(dirPath);
}
```

이제 `allFiles`는 `dirPath`가 가리키는 디렉터리의 모든 파일이 든 배열입니다. 다음과 같이 마지막 파일 하나를 골라낼 수 있습니다.

```js
const { readdir } = require("fs").promises;

async function findLastFileInDir(dirPath) {
  const allFiles = await readdir(dirPath);
  const lastFile = allFiles[allFiles.length - 1];
}
```

배열은 0부터 세므로 `allFiles.length - 1`은 마지막 요소의 위치입니다. 이제 `lastFile`을 반환하기만 하면 됩니다!

```js
const { readdir } = require("fs").promises;

async function findLastFileInDir(dirPath) {
  const allFiles = await readdir(dirPath);
  const lastFile = allFiles[allFiles.length - 1];

  return lastFile;
}
```

완성입니다! 이제 함수가 디렉터리의 모든 파일을 가져와 마지막 파일을 반환합니다.

## 도움말

- [MDN JavaScript 이벤트 루프](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [MDN 비동기 JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [MDN JavaScript Promise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [MDN Promise 체이닝](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#chaining_promises)
- [MDN 콜백 지옥](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#:~:text=the%20classic%20callback-,pyramid%20of%20doom,-%3A)

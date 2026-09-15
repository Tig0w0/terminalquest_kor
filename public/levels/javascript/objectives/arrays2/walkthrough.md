# 과제 도움말

이 과제를 완수하려면 코드 폴더에 `addFirstToLast.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

`addFirstToLast.js` 파일 안에는 `addFirstToLast`라는 이름의 함수를 정의해야 합니다. 이 함수는 단 하나의 인수로 '문자열 배열'을 받습니다. 그런 다음 여러분의 함수는 배열 안의 첫 번째 아이템과 마지막 아이템을 서로 연결한 결과인 문자열을 반환해야 합니다.

시작 코드로 사용할 수 있는 몇 가지 예제 코드가 여기에 있습니다:

```js
function addFirstToLast(inputArray) {
  let firstAndLast = '';

  // 배열에 아이템이 들어있을 때만 아래 코드를 실행합니다.
  if (inputArray.length > 0) {
    // 아래 줄을 수정하세요! 어떻게 바꿔야 할까요?
    firstAndLast = inputArray[999] + inputArray[999];
  }

  return firstAndLast;
}

// 아래 코드들은 여러분이 Node.js를 이용해 명령줄(터미널)에서 
// 이 스크립트를 실행할 때 함수를 테스트해 볼 수 있도록 해줍니다.
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
```

이 코드가 작동하도록 만들려면, 올바른 **인덱스(indexes)**를 사용하여 배열의 아이템들에 접근해야 합니다 - [이에 대한 방법은 여기에서 읽어보세요](https://ko.javascript.info/array#declaration). "인덱스(Index)"란 배열 내의 특정한 위치를 나타내는 숫자입니다. 프로그래밍에서 이러한 인덱스는 **항상 0부터 시작합니다**.

설명대로 함수를 잘 수정했다면, _HACK_ 버튼을 클릭하여 작업을 확인받으세요!

## 유용한 링크

* [배열 생성하기 - JavaScript.info](https://ko.javascript.info/array)
* [MDN 배열(Array) 참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JavaScript 첫걸음 - 배열(Array)](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Arrays)

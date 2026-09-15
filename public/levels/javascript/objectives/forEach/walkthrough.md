# 반복문(Loop) 시작하기

이 연습 과제의 목표는 [반복문을 사용하여 배열의 아이템들을 순회(iterate)하는 방법](https://ko.javascript.info/array-methods#iterate-foreach)을 배우는 것입니다. 프로그래밍에서 매우 흔한 작업 중 하나는 입력 아이템들의 목록을 받아 각 아이템에 대해 특정한 작업을 수행하는 것입니다. 아이템 목록의 각 항목을 하나씩 처리하는 과정을 "루핑(looping)" 또는 "반복(iteration)"이라고 합니다. 이 과제를 완수하기 위해 여러분이 해야 할 일이 바로 그것입니다.

코드 폴더에 `freightScanner.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `scan`이라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
function scan(freightItems) {
  let contrabandCount = 0;

  /*
  이 주석을 여러분의 코드로 대체하세요.

  여러분의 코드는 다음과 같이 동작해야 합니다:
  - freightItems 배열의 모든 아이템을 순회(loop)합니다.
  - 만약 아이템이 "contraband"와 같다면, contrabandCount를 1 증가시킵니다.
  */

  return contrabandCount;
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // 2 가 출력되어야 합니다.
```

함수가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 과제를 검증하세요.

## 유용한 링크

* [JavaScript.info - forEach로 반복 작업하기](https://ko.javascript.info/array-methods#iterate-foreach)
* [JavaScript.info - if 문](https://ko.javascript.info/ifelse)
* [JavaScript.info - 숫자 증가시키기](https://ko.javascript.info/operators#increment-decrement)
* [JavaScript.info - 함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN - 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

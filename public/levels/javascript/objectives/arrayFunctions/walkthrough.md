# 배열 내장 함수(Array Built-Ins) 시작하기

이 과제의 목표는 [배열 객체에 내장된 함수들(array built-ins)](https://ko.javascript.info/array-methods)에 친숙해져서 배열 안의 데이터를 다루는 법을 익히는 것입니다. 특히 이번 과제에서는 다음 함수들을 사용해야 합니다:

* [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): 배열 내의 모든 요소를 정렬하여 **기존 배열을 변경(mutates)**합니다.
* [slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice): 주어진 배열의 일부분을 잘라내어 **새로운 배열을 생성**합니다.

## 시작 코드(Starter code)

코드 폴더에 `getFirstAmountSorted.js`라는 이름의 새 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에 다음 시작 코드를 복사해서 붙여넣으세요.

```js
function getFirstAmountSorted(inputArray, numberOfItems) {
  // 1단계: inputArray를 알파벳 순으로 정렬합니다.
  // 2단계: 정렬된 배열에서 처음부터 N개의 아이템만 포함하는 새 배열을 만듭니다. 
  //        (N은 numberOfItems 변수에 들어있는 숫자입니다.)
  // 3단계: 2단계에서 만든 새 배열을 반환(return)합니다.
}

// 아래 줄의 코드들은 터미널에서 코드를 실행할 때 함수를 테스트하기 위한 용도입니다. 
// 함수가 동작하는 데 필수적인 코드는 아닙니다.
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << ['apple', 'bat'] 이 출력되어야 합니다.
```

여러분의 임무는 과제(Objective) 탭의 설명대로 `getFirstAmountSorted` 함수의 내부 로직을 구현하는 것입니다. 함수가 설명대로 정렬(sort)과 자르기(slice)를 잘 수행한다면, _HACK_ 버튼을 누르세요!

## 유용한 리소스

* [JavaScript.info - 배열과 메서드](https://ko.javascript.info/array-methods)
* [MDN sort 함수 참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [MDN slice 함수 참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

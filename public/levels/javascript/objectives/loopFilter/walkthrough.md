# 인덱스 번호들 찾기 (Find The Indexes)

이 연습 과제의 목표는 [배열의 아이템들을 필터링(filter)하는 방법](https://ko.javascript.info/array-methods#filter)을 배워, 코드에 필요 없는 항목들을 제거하는 것입니다.

코드 폴더에 `freightFilter.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `scanAndFilter`라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
function scanAndFilter(freightItems, forbiddenString) {
  // 이 배열 변수를 여러분이 필터링한 새로운 배열로 덮어쓰거나 반환하세요.
  let filteredItems = [];

  /*
  이 주석을 여러분의 코드로 대체하세요.
  배열의 filter() 함수를 사용하여, forbiddenString의 값을 
  포함하지 않는 새로운 문자열 배열을 만들고, 
  그 배열로 filteredItems 변수의 값을 교체하세요.
  */

  return filteredItems;
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const filtered = scanAndFilter(
  ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
  'ray gun'
);
console.log('Filtered Items');
console.log(filtered); // ['dog', 'cat', 'zippers'] 가 출력되어야 합니다.
```

이 작업을 수행하려면 [배열에 내장된 "filter" 함수](https://ko.javascript.info/array-methods#filter)를 사용해야 합니다.

함수가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 작업을 검증하세요.

## 유용한 링크

* [JavaScript.info - 배열 필터링하기(filter)](https://ko.javascript.info/array-methods#filter)
* [JavaScript.info - if 문](https://ko.javascript.info/ifelse)
* [JavaScript.info - 함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN - 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

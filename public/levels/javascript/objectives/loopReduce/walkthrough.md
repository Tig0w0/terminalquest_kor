# 인덱스 번호들 찾기 (Find The Indexes)

이 연습 과제의 목표는 [기존 배열의 항목들을 기반으로 하나의 값을 계산하는 코드 실행 방법](https://ko.javascript.info/array-methods#reduce-reduceright)을 배우는 것입니다.

코드 폴더에 `freightMass.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `calculateMass`라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
function calculateMass(freightItems) {
  // 이것은 freightItems 배열 안의 모든 문자열의 길이를 합산한 
  // 전체 문자 수(질량)를 저장하기 위한 변수입니다.
  let totalMass = 0;

  /*
  이 주석을 여러분의 코드로 대체하세요.
  배열의 reduce() 함수를 사용하여 totalMass의 값을 올바르게 교체하세요.
  forEach나 다른 방식의 반복문을 사용해서 이 작업을 수행할 수도 있지만,
  "reduce"를 사용하는 것이 아마도 가장 우아한 해결책일 것입니다!
  */

  return totalMass;
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // 12 가 출력되어야 합니다.
```

이 작업을 수행하려면 [배열에 내장된 "reduce" 함수](https://ko.javascript.info/array-methods#reduce-reduceright)를 사용해야 합니다. 문자열의 문자 수를 알아내려면 문자열의 `length` 속성을 사용하세요.

함수가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 작업을 검증하세요.

## 유용한 링크

* [JavaScript.info - 배열 reduce 함수](https://ko.javascript.info/array-methods#reduce-reduceright)
* [JavaScript.info - if 문](https://ko.javascript.info/ifelse)
* [JavaScript.info - 함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN - 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

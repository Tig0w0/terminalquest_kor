# 인덱스 번호들 찾기 (Find The Indexes)

이 연습 과제의 목표는 [기존 배열의 아이템들을 바탕으로 새로운 배열을 생성하는 코드 실행 방법](https://ko.javascript.info/array-methods#map)을 배우는 것입니다.

코드 폴더에 `freightTransformer.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `transform`이라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
function transform(freightItems) {
  // 이 배열 변수를 여러분이 변환한 새로운 배열로 덮어쓰거나 반환하세요.
  let transformedItems = [];

  /*
  이 주석을 여러분의 코드로 대체하세요.
  배열의 map() 함수를 사용하여 입력 배열의 문자열들을 
  모두 대문자(ALL CAPS)로 변환한 새로운 배열을 만들고, 
  그 배열로 transformedItems 변수의 값을 교체하세요.
  */

  return transformedItems;
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const transformed = transform(["dog", "ray gun", "cat"]);
console.log("Transformed Items");
console.log(transformed); // ['DOG', 'RAY GUN', 'CAT'] 이 출력되어야 합니다.
```

이 작업을 수행하려면 [배열에 내장된 "map" 함수](https://ko.javascript.info/array-methods#map)를 사용해야 합니다. 문자열을 모두 대문자로 변환하려면 내장 함수인 [toUpperCase()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)를 사용할 수 있습니다.

함수가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 작업을 검증하세요.

## 유용한 링크

- [JavaScript.info - 배열 map 함수](https://ko.javascript.info/array-methods#map)
- [MDN - 문자열을 위한 toUpperCase() 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [JavaScript.info - if 문](https://ko.javascript.info/ifelse)
- [JavaScript.info - 함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
- [MDN - 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

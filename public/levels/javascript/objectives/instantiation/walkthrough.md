# 좀 더 멋진 객체들 (Fancier Objects)

이 연습 과제의 목표는 JavaScript의 [객체 리터럴 표기법(object literal notation)](https://ko.javascript.info/object#literals-and-properties)에 익숙해지는 것입니다.

지금까지 JavaScript 연구소에서 한 작업의 대부분은 숫자, 문자열, 불리언(Boolean)과 같은 내장 객체(built-in objects)와 "원시(primitive)" 데이터 타입을 다루는 것이었습니다. 하지만 종종 여러분의 코드에서는 사용자(Users), 블로그 게시물(Blog Posts), 좋아요(Likes), 구독(Subscriptions) 등 여러분의 코드 목적에 맞는 보다 복잡한 데이터 개념을 표현해야 할 때가 있습니다.

이번 과제에서는 더 복잡한 데이터를 생성하기 위해 여러분이 자유롭게 활용할 수 있는 도구인 [객체 리터럴(object literal)](https://ko.javascript.info/object#literals-and-properties)을 배워볼 것입니다. 이런 방식으로 생성된 객체는 고유의 속성(properties)들을 가질 수 있으며, 단 하나의 변수에 할당될 수 있습니다.

코드 폴더에 `construction.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `construct`라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
function construct(name) {
  let person = {};

  return person;
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // "Kevin"이 출력되어야 합니다.
console.log('duration is: ' + somePerson.duration); // 1000 이 출력되어야 합니다.
```

함수가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 작업을 검증하세요.

## 유용한 링크

* [JavaScript.info - 객체 리터럴 표기법](https://ko.javascript.info/object#literals-and-properties)
* [MDN - 객체 초기자(Object Initialization)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* [JavaScript.info - 함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN - 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

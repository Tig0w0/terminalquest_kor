# 하이 클래스 (High Class)

이 연습 과제의 목표는 JavaScript [클래스(classes)](https://ko.javascript.info/class)에 익숙해지는 것입니다. "클래스"는 여러분이 자신의 코드 안에서 직접 생성할 수 있는 새로운 종류의 객체입니다.

지금까지 JavaScript 연구소에서 한 작업의 대부분은 숫자, 문자열, 불리언(Boolean)과 같은 내장 객체(built-in objects)와 "원시(primitive)" 데이터 타입을 다루는 것이었습니다. 클래스는 그보다 더 복잡하고 여러분의 코드에 특화된 데이터 개념, 예를 들어 사용자(Users), 블로그 게시물(Blog Posts), 좋아요(Likes), 구독(Subscriptions) 등을 표현할 때 쓰입니다. 또한 일반적인 [객체 리터럴(object literals)](https://ko.javascript.info/object#literals-and-properties)과 달리, 클래스는 자신이 가진 데이터를 조작하는 '동작(함수)'을 함께 가질 수 있습니다.

이번 과제에서는 과제(Objective) 탭의 명세서(specification)에 따라 [클래스를 생성](https://ko.javascript.info/class)해야 합니다.

코드 폴더에 `classes.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `Materializer`라는 이름의 클래스를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 클래스가 이미 정의되어 있긴 하지만, 아직 과제의 설명대로 작동하지는 않습니다:

```js
class Materializer {
  constructor(targetName) {
    // 여기에 여러분의 코드를 작성하세요
  }

  // 여기에 여러분의 코드를 작성하세요
}

// 다음 코드 줄들은 솔루션에 필수적인 부분은 아니지만, 
// 여러분의 코드를 테스트하는 용도로 사용할 수 있습니다.
const m = new Materializer('Kevin');
console.log(m.activated); // "false"가 출력되어야 합니다.

m.activate();
console.log(m.activated); // "true"가 출력되어야 합니다.

console.log(m.materialize()); // "Kevin"이 출력되어야 합니다.
```

여러분의 클래스가 과제 설명대로 올바르게 작동하면, _HACK_ 버튼을 클릭하여 작업을 검증하세요.

## 유용한 링크

* [JavaScript.info - 클래스(Classes)](https://ko.javascript.info/class)
* [MDN - 클래스 참조 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# 도움말 및 튜토리얼

<% if (isObjectiveReady) { %>

이 과제에서는 해결책을 만들기 위해 연구소의 북쪽 구역에서 객체(objects)와 클래스(classes)에 대해 배웠던 내용을 결합해야 합니다.

이번 연습 문제에서는 과제 설명에 나와 있는 사양에 따라 [클래스를 생성](https://ko.javascript.info/class)해야 합니다.

코드 폴더에 `targetingSolution.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에 `TargetingSolution`이라는 클래스를 생성해야 합니다. 다음은 시작 코드로 사용할 수 있는 예제입니다. 클래스 틀은 이미 만들어져 있지만, 과제 탭에서 설명한 대로 정상 동작하려면 내용을 직접 채워야 합니다:

```js
class TargetingSolution {
  constructor(config) {
    // 여기에 코드를 작성하세요
  }

  // 여기에 추가 코드를 작성하세요
}

// 아래 코드는 과제 제출에 필수는 아니지만,
// 작성한 솔루션이 잘 작동하는지 테스트할 때 유용하게 쓸 수 있습니다.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900,
});

console.log(m.target()); // "(10, 15, 900)" 이 출력되어야 합니다.
```

함수가 과제 설명대로 올바르게 작동한다면, _HACK_ 버튼을 클릭하여 여러분의 코드를 검증받으세요. 하실 수 있습니다!

## 유용한 링크(영문)

- [JavaScript.info - Classes](https://ko.javascript.info/class)
- [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Object literal notation](https://ko.javascript.info/object#literals-and-properties)
- [MDN - Object Initialization](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **이론 물리학자의 액세스 코드**가 필요합니다.

이론 물리학자는 덕타이피움이 시공간을 구부리고 물질을 조작하는 능력을 연구하던 연구소의 **북쪽 구역(north wing)**에 있을 가능성이 높습니다.

**이론 물리학자에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

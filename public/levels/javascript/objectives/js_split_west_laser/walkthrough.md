<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.beamTwoOnline &&
worldState.beamThreeOnline &&
worldState.beamFourOnline;
%>

# 도움말 및 튜토리얼

<%
if (isObjectiveReady) {
%>

이 과제는 여러분이 지금까지 JavaScript에 대해 배운 모든 것을 필요로 할 것입니다! 클래스(Classes), 배열 메서드(array methods), 논리 연산(boolean logic)이 모두 필요합니다.

여태까지 만들었던 코드 폴더에 `ducktypium.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에 `Ducktypium`이라는 클래스를 생성해야 합니다. 다음은 시작 코드로 사용할 수 있는 예제입니다. 클래스 틀은 이미 만들어져 있지만, 과제 탭에서 설명한 대로 정상 동작하려면 내용을 직접 채워야 합니다:

```js
class Ducktypium {
  constructor(color) {
    // 여기에 코드를 작성하세요
  }

  // 여기에 추가 메서드들을 작성하세요
}

// 아래 코드는 과제 제출에 필수는 아니지만,
// 작성한 솔루션이 잘 작동하는지 테스트할 때 유용하게 쓸 수 있습니다.
const dt = new Ducktypium("red");

console.log(dt.color); // 'red'가 출력되어야 함

console.log(dt.refract("blue")); // 'purple'이 출력되어야 함
console.log(dt.refract("red")); // 'red'가 출력되어야 함

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // [3, 9, 15]가 출력되어야 함
```

이전에 배웠던 기술들을 다시 연습하고 싶다면, 연구소의 다른 구역(동, 서, 남쪽 방)으로 언제든지 되돌아가서 복습할 수 있다는 점을 기억하세요.

과제에 설명된 대로 `Ducktypium` 클래스를 모두 구현했다면, _HACK_ 버튼을 눌러 실험을 되돌리세요! 해내실 수 있습니다!

## 유용한 링크(영문)

- [JavaScript.info - Full Reference](https://javascript.info/)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

<% } else { %>
아래 조건들을 완료하기 전에는 이 미션을 진행할 수 없습니다:

1. 길을 잃은 세 명의 과학자 찾기
2. 그들의 활성화 코드를 사용하여 이 방(중앙 방)에 있는 다른 3개의 광선 켜기

연구소의 나머지 구역을 탐험하세요. 지금 계신 메인 실험실을 기준으로 남쪽, 동쪽, 서쪽 구역에서 각각 한 명씩 과학자를 찾을 수 있습니다.

나머지 3개의 광선을 모두 다시 가동했다면, **이곳으로 돌아와 마지막 광선을 활성화하세요**.
<% } %>

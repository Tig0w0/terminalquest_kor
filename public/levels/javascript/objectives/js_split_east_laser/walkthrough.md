<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.eastWing &&
worldState.eastWing.hadSavedConversation;
%>

# 도움말 및 튜토리얼

<% if (isObjectiveReady) { %>

이 과제를 완료하려면 **무한 루프(Infinite Loop) 호**에서 전기 엔지니어를 구출하며 배웠던 몇 가지 기술들을 결합해야 합니다.

코드 폴더에 `laserPower.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에 `calculatePower`라는 함수를 생성해야 합니다. 다음은 시작 코드로 사용할 수 있는 예제입니다. 함수 틀은 이미 정의되어 있지만, 과제 탭에서 설명한 대로 정상 동작하려면 내용을 직접 채워야 합니다:

```js
function calculatePower(powerSettings) {
  let totalPower = 0;

  return totalPower;
}

// 아래 코드는 과제 제출에 필수는 아니지만,
// 작성한 솔루션이 잘 작동하는지 테스트할 때 유용하게 쓸 수 있습니다.
const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // 24가 출력되어야 합니다
```

여러분이 지금까지 도달하기 위해 필요했던 모든 기술이 이 과제를 극복하는 데 쓰일 것입니다. 여러분은 할 수 있습니다!

`calculatePower` 함수가 과제 설명대로 올바르게 작동한다면 _HACK_ 버튼을 클릭하세요.

## 유용한 링크(영문)

- [JavaScript.info - Array reduce function](https://javascript.info/array-methods#reduce-reduceright)
- [JavaScript.info - Array map function](https://javascript.info/array-methods#map)
- [JavaScript.info - if statements](https://javascript.info/ifelse)
- [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
- [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **전기 엔지니어의 액세스 코드**가 필요합니다.

전기 엔지니어는 연구소의 **동쪽 구역(east wing)**에 정박해 있는 보급 화물선에 있을 가능성이 큽니다. 폭발이 일어났을 때 그들은 새 보급품을 처리하고 있었습니다.

**전기 엔지니어에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

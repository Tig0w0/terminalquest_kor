<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.southWing &&
worldState.southWing.hadSavedConversation;
%>

# 레이저 재시동

<% if (isObjectiveReady) { %>

남쪽 구역에서 조건 논리(conditional logic)에 대해 배우셨다면, 이제 이 과제에 도전할 준비가 되셨을 겁니다! 코드 폴더에 `sortOrder.js`라는 파일을 생성하세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

다음 코드를 복사하여 시작 코드(starting point)로 사용하세요:

```js
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// 여기에 비교를 위한 코드(if 문)를 작성하세요
```

여러분의 코드는 첫 번째 값이 두 번째 값보다 알파벳순으로 앞에 오는지, 같은지, 또는 뒤에 오는지에 따라 세 가지 숫자 중 하나를 출력해야 합니다. 예를 들어 스크립트를 다음과 같이 실행한다면:

```bash
node sortOrder.js cats dogs
```

`cats`가 `dogs`보다 알파벳순으로 앞에 오므로 `-1`을 출력해야 합니다. 만약 이렇게 실행한다면:

```bash
node sortOrder.js cats CATS
```

두 문자열 `cats`와 `CATS`는 알파벳순으로 동등하므로 `0`을 출력해야 합니다. 마지막으로 이렇게 실행한다면:

```bash
node sortOrder.js dogs cats
```

`dogs`가 `cats`보다 알파벳순으로 뒤에 오므로 `1`을 출력해야 합니다.

여러분의 코드는 [여기 설명된 것처럼 문자열을 알파벳순으로 비교](https://ko.javascript.info/comparison#string-comparison)해야 합니다. 또한, 비교하기 전에 두 문자열을 같은 대소문자로 맞춰주기 위해 [toLowerCase](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)를 사용해야 할 수도 있습니다.

이 과제는 여러분이 연구소의 남쪽 구역에서 수행했던 작업들과 매우 비슷합니다. 필요한 경우 남쪽 구역에서 작성했던 코드를 다시 확인해 보세요.

스크립트가 과제 탭의 설명대로 잘 동작한다면, _HACK_ 버튼을 클릭하세요. 하실 수 있습니다!

## 유용한 리소스

- [MDN 조건문 참조](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info - 문자열 비교](https://ko.javascript.info/comparison#string-comparison)

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **식물학자의 액세스 코드**가 필요합니다.

식물학자는 이전에 덕타이피움이 식물에 미치는 영향을 연구하던 연구소의 **남쪽 구역(south wing)**에 있을 가능성이 높습니다.

**식물학자에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.beamTwoOnline &&
worldState.beamThreeOnline &&
worldState.beamFourOnline;
%>

# 마지막 광선 활성화하기

<style>
table.lasers {
  margin-top: 10px;
}
table.lasers th, table.lasers td {
  text-align: center !important;
}
table.lasers td span {
  font-weight: bold;
}
table.lasers td span.on {
  color: green;
}
table.lasers td span.off {
  color: red;
}
</style>

<table class="lasers">
  <tr>
    <th>광선 1</th>
    <th>광선 2</th>
    <th>광선 3</th>
    <th>광선 4</th>
  </tr>
  <tr>
    <td>
      <% if (worldState.beamOneOnline) { %>
        <span class="on">온라인</span>
      <% } else { %>
        <span class="off">오프라인</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamTwoOnline) { %>
        <span class="on">온라인</span>
      <% } else { %>
        <span class="off">오프라인</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamThreeOnline) { %>
        <span class="on">온라인</span>
      <% } else { %>
        <span class="off">오프라인</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamFourOnline) { %>
        <span class="on">온라인</span>
      <% } else { %>
        <span class="off">오프라인</span>
      <% } %>
    </td>
  </tr>
</table>

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li><code>ducktypium.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>지금까지 배운 모든 기술을 사용하여, 과제에 설명된 대로 <code>Ducktypium</code> 클래스를 만드세요.</li>
  <li>모두 완료했다면 <em>HACK</em> 버튼을 눌러 실험을 역전시키세요!</li>
</ul>
<% } else { %>
<ul>
  <li>연구소에서 길을 잃은 세 명의 과학자를 찾아 활성화 코드를 얻으세요.</li>
  <li>활성화 코드를 사용해 광선 2, 3, 4번을 가동하세요.</li>
  <li>이곳으로 돌아와 마지막 1번 광선을 활성화하세요.</li>
</ul>
<% } %>
</div>

<%
if (isObjectiveReady) {
%>

이제 나머지 3개의 광선이 모두 켜졌으므로, **실패한 실험을 역전시키고** 우리가 아는 현실 세계를 구해낼 기회가 주어졌습니다!

여러분은 이전 실험의 문제점을 분석하기 위해 메인 광선의 제어판을 바쁘게 훑어봅니다. 수석 과학자의 계산은 확실히 정확했고 계획대로 작동했어야 마땅해 보입니다. 이번 폭발의 원인은 사실 다른 곳에 있었는데, 누군가 **고의적으로 사보타주(파괴 공작)**를 벌인 흔적이 발견되었습니다! 범인을 찾아내겠다고 맹세하지만, 일단은 눈앞의 문제를 해결하는 데 집중하기로 합니다.

사보타주로 인해 가장 중요한 JavaScript 유틸리티 파일이 백업도 없이 완전히 삭제되어 버렸습니다. 덕타이피움의 특성을 정의하고 크리스탈 안정화 과정과 관련된 여러 작업을 수행하는 이 중요한 파일을 여러분이 직접 다시 만들어야 합니다.

## Ducktypium 클래스

여러분의 코드 폴더 안에 `ducktypium.js`라는 파일을 생성하세요. 그 파일 안에 `Ducktypium`이라는 이름의 클래스를 만들어야 합니다. 생성자(constructor)는 크리스탈의 색상을 나타내는 단일 문자열 인수를 받아 `color`라는 인스턴스 변수에 저장해야 합니다. **색상은 오직 `red`, `blue`, `yellow` 중 하나만 가능합니다**. 전달된 문자열 인수가 이 세 가지 색상이 아닐 경우, 생성자는 [에러를 발생(throw)](https://javascript.info/try-catch#throwing-our-own-errors)시켜야 합니다.

클래스의 인스턴스가 생성될 때, 빈 배열(empty array)로 초기화되는 `calibrationSequence`라는 **속성도 함께 정의**해야 합니다.

또한 `Ducktypium` 클래스는 두 개의 인스턴스 메서드, 즉 `refract`와 `calibrate`를 구현해야 합니다. 각 함수의 기능은 아래에서 설명하겠습니다.

## `refract` 메서드

첫 번째 필수 메서드는 덕타이피움이 유색 빛에 노출되었을 때 나타나는 굴절(refract) 특성을 정의합니다.

`refract` 메서드는 단일 문자열 인수를 받아야 하며, 이 인수 역시 `red`, `blue`, `yellow` 중 하나여야 합니다. 생성자와 마찬가지로 이 세 가지 색상이 아닐 경우 [에러를 발생(throw)](https://javascript.info/try-catch#throwing-our-own-errors)시켜야 합니다. 이 함수는 인스턴스의 `color` 속성과 `refract` 함수에 전달된 색상이 결합되어 만들어진 **단일 문자열(색상)을 반환**해야 합니다.

- 만약 인스턴스의 `color` 속성과 전달된 인수의 색상이 동일하다면, 그대로 그 색상을 반환합니다.
- 색상이 서로 다르다면, 두 [원색(primary colors)](https://ko.wikipedia.org/wiki/%EC%9B%90%EC%83%89)이 섞여서 만들어지는 색상의 문자열을 반환해야 합니다.

참고로, 원색이 섞일 때의 결과는 다음과 같습니다:

- <span style="color:red">red(빨강)</span> + <span style="color:blue">blue(파랑)</span> = <span style="color:purple">purple(보라)</span>
- <span style="color:red">red(빨강)</span> + <span style="color:#ad9400">yellow(노랑)</span> = <span style="color:orange">orange(주황)</span>
- <span style="color:#ad9400">yellow(노랑)</span> + <span style="color:blue">blue(파랑)</span> = <span style="color:green">green(초록)</span>

## `calibrate` 메서드

두 번째 필수 메서드는 덕타이피움 크리스탈을 안정화하는 데 필요한 보정 시퀀스(calibration sequence)를 만듭니다.

`calibrate` 메서드는 숫자들의 배열(array)을 단일 인수로 받습니다. 이 입력 배열을 사용하여 다음 작업을 수행해야 합니다:

- 숫자들을 가장 작은 수부터 가장 큰 수로 정렬(sort)합니다.
- 정렬된 배열의 각 숫자에 `3`을 곱합니다.
- 결과 배열을 해당 `Ducktypium` 인스턴스의 `calibrationSequence` 변수에 할당합니다.

## 사용 예시

모두 완성된 Ducktypium 클래스는 다음 예시와 같이 동작해야 합니다.

```js
// 올바르지 않은 색상이므로 에러가 발생합니다.
try {
  const badColor = new Ducktypium("pink");
} catch (e) {
  console.log("Color must be red, yellow, or blue!");
}

// 클래스의 새 인스턴스를 생성합니다.
const dt = new Ducktypium("red");

console.log(dt.color); // 'red' 출력

console.log(dt.refract("blue")); // 'purple' 출력
console.log(dt.refract("red")); // 'red' 출력

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // [3, 9, 15] 출력
```

도움말(Walkthrough) 탭에서 시작 코드로 사용할 수 있는 예제 코드를 제공합니다. 여러분이 가진 모든 JavaScript 지식을 총동원해야 하겠지만, 충분히 해내실 수 있습니다! The Cloud의 운명이 여러분의 손에 달렸습니다.

`ducktypium.js` 스크립트가 준비되면 _HACK_ 버튼을 클릭하여 실험을 역전시키세요!

<% } else { %>
실패한 덕타이피움 실험을 되돌리려면 현재 방에 있는 1번 광선을 포함하여 **4개의 정지 광선을 모두 다시 켜야 합니다**. 이 광선(1번)을 가동하기 전에 2, 3, 4번 광선이 먼저 켜져 있어야 합니다.

수석 과학자가 다른 3개의 레이저를 재가동하는 데 필요한 **활성화 코드를 그녀의 동료들이 가지고 있다**고 알려주었습니다. 연구소의 다른 구역을 수색하여 이 3명의 과학자를 찾고, **그들의 활성화 코드를 사용**하여 이 방에 있는 나머지 레이저들을 다시 켜세요.

나머지 3개의 광선을 모두 다시 가동하고 나면, **이곳으로 돌아와 마지막 광선을 활성화하세요**.
<% } %>

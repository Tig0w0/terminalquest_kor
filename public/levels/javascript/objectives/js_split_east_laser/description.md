<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.eastWing &&
worldState.eastWing.hadSavedConversation;
%>

# 3번 광선 가동하기

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
  <li><code>laserPower.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>숫자 배열(array of numbers)을 유일한 인수로 받는 <code>calculatePower</code>라는 이름의 함수를 생성하세요.</li>
  <li>여러분의 함수는 반드시 <b>숫자를 반환(return)</b>해야 합니다. 반환되는 숫자는 과제 설명에 나온 대로 입력 배열을 변환하고 조합한 결과여야 합니다.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
<% } else { %>
<ul>
  <li>연구소의 동쪽 구역(east wing)에서 전기 엔지니어를 찾아 대화하세요.</li>
  <li>이곳으로 돌아와 3번 광선을 가동하세요.</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

전기 엔지니어의 암호를 입력하자 제어 장치의 디스플레이가 켜지고, 여러분은 3번 광선 시스템의 문제를 해결하기 시작합니다.

레이저 광선으로 보낼 전력을 계산하는 방식에 오류가 발생하여 이 광선이 오프라인 상태가 된 것 같습니다. 이 계산 로직은 JavaScript 함수로 제어되고 있으며, 여러분이 직접 고쳐야 합니다.

이 도전 과제를 극복하려면 배열(arrays)에 대해 배운 모든 지식을 동원해야 합니다.

## 레이저 다시 시작하기

코드 폴더에 `laserPower.js`라는 이름의 파일을 만드세요. 이 파일 안에 `calculatePower`라는 이름의 [JavaScript 함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하세요.

이 함수는 숫자 배열(array of numbers)인 단일 인수를 하나 받습니다. 이 배열에는 레이저를 위한 종합 전력 설정값들이 들어있는데, 입력된 숫자들이 조금 어긋나 있습니다.

여러분의 `calculatePower` 함수는 먼저 입력 배열의 모든 값에 **2를 곱하여** 조정해야 합니다. 그 후, **그렇게 조정된 모든 숫자들을 더하여**, 여러분의 함수에서 **그 결과값을 반환(return)**해야 합니다.

코드가 준비되면 _HACK_ 버튼을 클릭하여 이 레이저를 다시 가동하세요!

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **전기 엔지니어의 액세스 코드**가 필요합니다.

전기 엔지니어는 연구소의 **동쪽 구역(east wing)**에 정박해 있는 보급 화물선에 있을 가능성이 큽니다. 폭발이 일어났을 때 그들은 새 보급품을 처리하고 있었습니다.

**전기 엔지니어에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

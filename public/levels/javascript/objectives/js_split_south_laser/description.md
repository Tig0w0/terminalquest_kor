<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.southWing &&
worldState.southWing.hadSavedConversation;
%>

# 2번 광선 가동하기

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
  <li><code>sortOrder.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>이 스크립트는 2개의 명령줄 인수(command line arguments)를 받아 비교해야 합니다.</li>
  <li>알파벳 순서에 따라 아래 설명된 대로 <code>-1</code>, <code>0</code>, <code>1</code> 중 하나를 출력해야 합니다.</li>
</ul>
<% } else { %>
<ul>
  <li>연구소의 남쪽 구역(south wing)에서 식물학자를 찾아 대화하세요.</li>
  <li>이곳으로 돌아와 2번 광선을 가동하세요.</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

식물학자의 활성화 코드를 사용하여 이 정지 광선의 제어 장치에 접근합니다. 간단한 진단 프로그램을 실행해 본 결과, 레이저의 핵심 기능 중 하나인 **문자열을 알파벳순으로 정렬하는 스크립트**가 누락되어 있는 것을 발견했습니다.

레이저를 다시 켜려면 이 정렬 스크립트를 새로 작성해야 합니다.

## 순서대로 정렬하기

코드 폴더에 `sortOrder.js`라는 이름의 스크립트를 생성하세요. 이 스크립트는 **두 개의 명령줄 인수(command line arguments)**를 받습니다. 이 인수들은 알파벳순으로 어느 것이 먼저 오는지 비교해야 할 두 개의 문자열입니다 (대소문자는 구분하지 않아도 됩니다).

스크립트를 테스트하려면 다음과 같이 실행합니다:

```bash
node sortOrder.js cats dogs
```

여러분의 스크립트는 첫 번째 문자열이 두 번째 문자열보다 알파벳순으로 앞에 오는지, 뒤에 오는지, 아니면 같은 순서(동일한 문자열)인지 판단해야 합니다. 각 경우에 따라 아래 설명대로 `console.log`를 사용하여 숫자를 출력해야 합니다.

- 첫 번째 인수가 두 번째 인수보다 알파벳순으로 **앞에 올 때(earlier)**, 스크립트는 `-1`을 출력해야 합니다.
- 첫 번째 인수가 두 번째 인수와 **같을 때(same)**, 스크립트는 `0`을 출력해야 합니다.
- 첫 번째 인수가 두 번째 인수보다 알파벳순으로 **뒤에 올 때(later)**, 함수는 `1`을 출력해야 합니다.

스크립트에 이 비교 기능이 올바르게 구현되었다면, _HACK_ 버튼을 클릭하여 레이저를 다시 시작하세요!

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **식물학자의 액세스 코드**가 필요합니다.

식물학자는 이전에 덕타이피움이 식물에 미치는 영향을 연구하던 연구소의 **남쪽 구역(south wing)**에 있을 가능성이 높습니다.

**식물학자에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

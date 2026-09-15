<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# 4번 광선 가동하기

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
  <li><code>targetingSolution.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>이 과제에 명시된 사양에 따라 <code>TargetingSolution</code>이라는 이름의 클래스(class)를 생성하세요.</li>
</ul>
<% } else { %>
<ul>
  <li>연구소의 북쪽 구역(north wing)에 갇혀 있는 이론 물리학자를 찾아 대화하세요.</li>
  <li>이곳으로 돌아와 4번 광선을 가동하세요.</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

물리학자의 암호를 입력하자 제어 장치의 디스플레이가 켜지고, 여러분은 4번 광선 시스템의 문제를 해결하기 시작합니다.

폭발 사고로 인해 이 광선의 타겟팅(조준) 시스템이 손상된 것 같습니다. 이 레이저를 다시 시작하려면, [JavaScript 클래스(classes)](https://ko.javascript.info/class)와 [객체 리터럴(object literals)](https://ko.javascript.info/object#literals-and-properties)을 사용하여 레이저의 새로운 타겟팅 메커니즘을 구현해야 합니다.

## 광선 다시 시작하기

코드 폴더에 `targetingSolution.js`라는 이름의 파일을 만드세요. 이 파일 안에 `TargetingSolution`이라는 이름의 [JavaScript 클래스](https://ko.javascript.info/class)를 생성하세요. 이 클래스는 레이저의 타겟팅 정보를 저장하고, 타겟의 좌표를 포함하는 포맷된 문자열(formatted string)을 제공하는 역할을 합니다.

이 클래스의 생성자(constructor)는 단 하나의 인수를 받아야 합니다 - 바로 연구소 3D 공간 내 타겟의 정확한 x, y, z 좌표를 담고 있는 객체 리터럴(object literal)입니다.

여러분의 `TargetingSolution` 생성자는 이 설정 객체(configuration object)로부터 다음 3개의 속성을 인스턴스 변수로 저장해야 합니다.

| 속성명(property) | 타입(type) |
| -------- | ------ |
| x        | number (숫자) |
| y        | number (숫자) |
| z        | number (숫자) |

여기에 더해, 여러분의 클래스는 `target`이라는 이름의 인스턴스 함수(메서드)를 반드시 구현해야 합니다. 이 함수는 해당 인스턴스의 타겟 좌표를 `(x, y, z)` 형식의 포맷된 문자열로 반환해야 합니다. (괄호, 쉼표, 그리고 띄어쓰기(공백)까지 모두 정확히 포함해야 합니다.)

여러분이 만들어야 할 클래스의 사용 예시는 다음과 같습니다:

```js
const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1,
});

console.log(sln.target()); // "(45, 12, -1)" 이라는 문자열을 출력해야 합니다.
```

**주의: target 함수는 위에서 보여진 정확한 형식과 띄어쓰기를 사용해야 합니다!**

언제나 그렇듯 시작 코드로 사용할 수 있는 예제가 도움말(Help) 탭에 준비되어 있습니다. 코드가 완성되면 _HACK_ 버튼을 클릭하여 이 레이저를 다시 가동하세요!

<% } else { %>

이 정지 광선의 제어 장치를 살펴보았지만 현재 잠겨 있습니다. 이 레이저를 활성화하려면 **이론 물리학자의 액세스 코드**가 필요합니다.

이론 물리학자는 덕타이피움이 시공간을 구부리고 물질을 조작하는 능력을 연구하던 연구소의 **북쪽 구역(north wing)**에 있을 가능성이 높습니다.

**이론 물리학자에게 말을 걸어** 이 광선을 켤 수 있는 액세스 코드를 획득하세요.

<% } %>

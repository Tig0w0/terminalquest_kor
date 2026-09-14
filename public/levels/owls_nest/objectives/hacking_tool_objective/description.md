<%
const worldState = levelState['com.twilioquest.owls_nest'];
%>

# 해킹 인터페이스 익히기

<div class="aside">
<h3>할 일</h3>
<ul>
  <li>이 방의 받침대에서 해킹 도구를 얻습니다.</li>
  <li>이 화면의 "목표" 탭에서 비밀 암호를 찾습니다.</li>
  <li>오른쪽 입력란에 암호를 입력한 다음 <em>HACK</em>을 클릭합니다.</li>
</ul>
</div>

TerminalQuest의 세계에는 이 터미널처럼 **해킹할 수 있는 물체**가 곳곳에 있습니다. TerminalQuest 프로그램에서 개발한 최첨단 해킹 도구를 사용하면 기술 과제와 비기술 과제를 해결해 이런 물체를 해킹할 수 있습니다. 질문에 답하거나, 컴퓨터의 파일에 코드를 작성하는 등 다양한 과제가 기다리고 있습니다.

이 과제를 완료하려면 **이 방의 받침대에 놓인 해킹 도구를 획득**해야 합니다. 그러면 레이저 장벽을 우회하는 데 필요한 암호가 아래 상자에 나타납니다. 오른쪽 입력란에 암호를 입력하고 *HACK*을 클릭해 레이저 장벽을 해제하세요.

<style>
.passcode {
  color: #eee;
  padding: 10px;
  text-align: center;
}

.passcode h3 {
  font-size: 1.5em;
  border-bottom: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-weight: bold;
  text-transform: uppercase;
}

.passcode p {
  margin: 0 0 5px 0;
  padding: 0;
}

.passcode-locked {
  border: 5px solid #8B0000;
  background-color: #DC143C;
}

.passcode-open {
  border: 5px solid #8FBC8F;
  background-color: #7FFF00;
  color: #232323;
}
</style>

<% if (worldState.hackingToolAcquired) { %>
<div class="passcode passcode-open">
<h3>암호 사용 가능</h3>
<p>
레이저 우회 암호: <b>LEVEL UP</b>
</p>
<p>
<i>오른쪽 입력란에 이 암호를 입력하고 "HACK"을 클릭하세요.</i>
</p>
</div>
<% } else { %>
<div class="passcode passcode-locked">
<h3>암호 잠김</h3>
<p>
이 시스템을 우회하고 암호를 확인하려면 해킹 도구가 필요합니다. <b>이 방의 받침대에서 해킹 도구를 찾으세요.</b>
</p>
</div>
<% } %>

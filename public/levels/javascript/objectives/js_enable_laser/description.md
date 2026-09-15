<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

# 폭발적인 발견 (An Incendiary Revelation)

TwilioQuest 연구팀이 획기적인 실험을 시도하려 합니다. 네 개의 프로토타입 분자 안정화 광선을 사용하여, JavaScript의 힘의 원천인 신비한 물질 **덕타이피움(ducktypium)**을 고체 상태로 관측하는 최초의 과학자들이 될 것입니다! 하지만 실험을 계속하려면 **고장 난 네 번째 레이저 광선을 재부팅**해야 합니다.

<% if (worldState.room1.passwordFound) { %>

## 고장 난 정지 광선 재부팅하기

여러 번의 시도 끝에 레이저 비밀번호가 `PEW PEW PEW!`라는 것을 알아냈습니다. 오른쪽의 텍스트 입력란에 비밀번호를 입력하고 _HACK_ 버튼을 클릭하세요. 과학을 위하여!

<% } else { %>

레이저를 재부팅하려면 비밀번호가 필요한 것 같습니다. 이 방에 들어올 때 지나쳐온 **수석 과학자에게 말을 걸어** 비밀번호를 알아내세요!

<% } %>

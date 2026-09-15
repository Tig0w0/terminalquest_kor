<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

<% if (worldState.room1.passwordFound) { %>

# 비밀번호를 입력하세요

여러 번의 시도 끝에 레이저 비밀번호가 `PEW PEW PEW!`라는 것을 알아냈습니다. 오른쪽의 텍스트 입력란에 비밀번호를 입력하고 _HACK_ 버튼을 클릭하세요. 과학을 위하여!

<% } else { %>

# 먼저 비밀번호를 구하세요!

**특수 비밀번호** 없이는 레이저를 재부팅할 수 없습니다. 비밀번호를 얻으려면 이 방에 들어올 때 지나쳐온 **수석 과학자에게 말을 거세요**. 그녀가 어떻게 해야 할지 알려줄 것입니다!

<% } %>

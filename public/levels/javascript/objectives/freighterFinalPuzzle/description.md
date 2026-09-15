<%
const worldState = levelState.TQ_JAVASCRIPT_WORLD_STATE;
%>

# 마스터 비밀번호 (The Master Password)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><b>Infinite Loop</b>의 마스터 비밀번호 6글자를 알아내기 위해 필요한 6개의 인덱스를 찾아내세요.</li>
  <li>인덱스들은 화물선 내부에 있는 <b>보안 노드(security nodes)</b>들을 해킹하여 획득할 수 있습니다.</li>
  <li>6개의 인덱스를 모두 찾은 후, 아래 제공된 2차원 배열에서 인덱스에 해당하는 올바른 글자들을 조합하여 비밀번호를 완성하세요.</li>
  <li><em>HACK</em> 버튼을 클릭하여 비밀번호를 입력해 보세요.</li>
</ul>
</div>

장벽 너머로 TwilioQuest 연구팀의 **전기 엔지니어**가 보입니다! 그녀는 오리타이피움(ducktypium) 실험을 재개하기 위해 필요한 활성화 코드 중 하나를 가지고 있습니다. 하지만 그녀는 **Infinite Loop** 내의 다른 장벽들과는 좀 다른 특수한 장벽 뒤에 갇혀 있습니다.

이 장벽은 6글자로 된 특별한 **마스터 비밀번호**를 요구합니다. 비밀번호를 해독하는 데 필요한 단서들은 함선 내부를 탐험하며 6개의 보안 화물칸에 위치한 **보안 노드**들을 해킹하여 찾을 수 있습니다. 6개의 보안 노드를 모두 해킹한 후 이곳으로 돌아와 비밀번호를 입력해 보세요.

## 비밀번호 해독하기 (Deciphering the password)

**Infinite Loop**의 마스터 비밀번호는 6글자로 이루어져 있습니다. 비밀번호의 각 문자는 다음의 [2차원 배열(two-dimensional array)](https://medium.com/javascript-in-plain-english/javascript-multi-dimensional-arrays-7186e8edd03) 안에서 찾을 수 있습니다.

```js
const passwordArray = [
  ["Q", "W", "E", "R", "T", "Y"],
  ["A", "S", "D", "F", "G", "H"],
  ["Z", "X", "C", "V", "B", "N"],
  ["U", "I", "O", "P", "!", "@"],
  ["H", "J", "K", "L", "#", "$"],
  ["M", "%", "^", "&", "*", "?"],
];
```

화물선 내부에 있는 각 **보안 노드**는 이 배열 안에서 비밀번호의 특정 문자가 위치한 인덱스 정보를 가지고 있습니다. 인덱스는 `[x][y]` 형태로 주어지며, 여기서 `x`는 문자가 위치한 "행(row)"의 인덱스 번호이고, `y`는 "열(column)"의 인덱스 번호입니다. 여러분이 지금까지 찾은 인덱스들은 다음과 같습니다:
<%
// Password is "F!N!TE"
const nodes = worldState.eastWingSecNodes || [];
const ii = [
nodes[0] ? '`[1][3]`' : '발견 못함 (Not Found)',
nodes[1] ? '`[3][4]`' : '발견 못함 (Not Found)',
nodes[2] ? '`[2][5]`' : '발견 못함 (Not Found)',
nodes[3] ? '`[3][4]`' : '발견 못함 (Not Found)',
nodes[4] ? '`[0][4]`' : '발견 못함 (Not Found)',
nodes[5] ? '`[0][2]`' : '발견 못함 (Not Found)'
];
%>

| 첫 번째 문자     | 두 번째 문자     | 세 번째 문자     | 네 번째 문자     | 다섯 번째 문자     | 여섯 번째 문자     |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| <%= ii[0] %> | <%= ii[1] %> | <%= ii[2] %> | <%= ii[3] %> | <%= ii[4] %> | <%= ii[5] %> |

6개의 인덱스를 모두 찾았다면, 이곳으로 돌아와 비밀번호를 해독해 보세요!

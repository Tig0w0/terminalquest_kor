# 수상한 항아리

<div class="aside"><h3>요구 사항</h3><ul><li>세드릭이 깨야 할 항아리 종류를 알아내세요.</li><li>`white and green`, `terracotta`, `gray` 중 하나를 입력하세요.</li><li>완료하면 <em>해킹</em>을 누르세요.</li></ul></div>

세드릭은 빈 복도에 놓인 항아리들을 발견했습니다. O.W.L. 장치는 그중 하나에 보물이 있지만 나머지는 함정이라고 경고합니다.

<% const imagePath = await resolveAbsolutePath("images/challenge-questions/logic_puzzle_x4.png") %>

![흰색과 초록색 항아리 3개, 테라코타 항아리 2개, 회색 항아리 1개가 있는 복도](<%= imagePath %>)

- 색은 `white and green`, `terracotta`, `gray` 세 종류입니다.
- 가장 많은 항아리는 만들어진 지 100년 이하입니다.
- 가장 적은 항아리는 칠이 벗겨지고 있습니다.
- 테라코타 항아리는 오래되어 금이 가고 있습니다.
- 가장 새 항아리에는 함정이 있습니다.
- 칠이 벗겨진 항아리는 200~300년 되었습니다.
- 금이 간 항아리는 최소 500년 되었습니다.
- 가장 오래된 항아리에도 함정이 있습니다.

함정이 없는 항아리의 색을 입력하세요.

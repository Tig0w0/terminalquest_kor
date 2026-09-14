# 세드릭을 사원으로 안내하기

<div class="aside"><h3>요구 사항</h3><ul><li>`up`, `down`, `left`, `right` 지시 목록으로 세드릭을 사원 입구까지 안내하세요.</li><li>완료하면 <em>해킹</em>을 누르세요.</li></ul></div>

세드릭은 어둠의 덕타이피움 투구를 찾고 있지만 광학 센서가 꺼졌습니다. 길을 따라 사원 문까지 갈 수 있도록 지시해 주세요. 각 지시는 한 칸 이동시킵니다. 예를 들어 `right down down`은 오른쪽 한 칸, 아래 두 칸을 뜻합니다.

<% const imagePath = await resolveAbsolutePath("images/challenge-questions/turtle_x4.png") %>

![세드릭이 사원까지 걸어갈 경로](<%= imagePath %>)

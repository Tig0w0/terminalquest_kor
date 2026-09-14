<% const isWindows = context.systemInfo.os === 'win32'; %>

# 파일 경로 찾기

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>아래 파일 트리 도표를 살펴보세요.</li>
  <li>표시된 파일 경로를 오른쪽 입력란에 입력하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

세드릭은 YouTube 채널을 시작하려고 자신이 만든 동영상을 찾고 있습니다. 그가 동영상을 어디에 두었는지 찾아 주세요.

다음은 세드릭의 컴퓨터에 있는 파일과 폴더를 나타낸 도표입니다. 동영상 파일로 이어지는 경로를 찾으세요.

```plaintext
cedric/
├── robot_thoughts/
│ ├── real_boy.idea
│ └── youtube_video.mp4
│
├── thank_you_drafts/
│ ├── thank_you_toast.docx
│ ├── thank_you_toast_v1.docx
│ ├── thank_you_toast_v2.docx
│ └── thank_you_toast_v2_Final.docx
│
├── fog_owl_computations.csv
└── my_cool_drawing.png
```

비교할 수 있는 파일 경로의 예입니다.

- 세드릭의 포그 아울 비행 계산 파일 경로:
  <%= `\`${formatPathPartsForOs('cedric', 'fog_owl_computations.csv')}\`` %>
- 세드릭의 최종 감사 연설문 경로:
  <%= `\`${formatPathPartsForOs('cedric', 'thank_you_drafts', 'thank_you_toast_v2_Final.docx')}\``%>

오른쪽 입력란에 세드릭의 YouTube 동영상 파일 경로를 입력한 뒤 _해킹_ 버튼을 누르세요.

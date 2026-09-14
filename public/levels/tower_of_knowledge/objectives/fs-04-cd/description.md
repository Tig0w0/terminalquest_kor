<% const isWindows = context.systemInfo.os === 'win32'; %>

# 디렉터리 사이 이동하기

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>아래 파일 트리를 살펴보세요.</li>
  <li>상황 1과 상황 2에서 현재 작업 디렉터리가 무엇인지 판단하세요.</li>
  <li>오른쪽 입력란에 두 값을 입력하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

파일 시스템에 무엇이 있는지 알았으니 이동하는 방법을 배워 봅시다. 세드릭의 파일 시스템은 다음과 같습니다.

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

다음 두 상황을 생각해 보세요.

1. 루트 `cedric` 디렉터리에서 `robot_thoughts` 디렉터리로 이동하면 새 현재 작업 디렉터리는 무엇인가요?
2. 루트 `cedric` 디렉터리에서 `fog_owl_computations.csv`로 이동하려 하면 현재 작업 디렉터리는 무엇인가요?

두 경로를 오른쪽 입력란에 넣고 _해킹_ 버튼을 누르세요.

## 디렉터리는 어떻게 바꾸나요?

<% if(isWindows) { %>

세 번째 명령어 `cd`는 "change directory"의 약자로, 터미널의 현재 작업 디렉터리를 바꿉니다. `cd` 뒤에 이동할 디렉터리 이름을 입력하면 됩니다. 이후 `pwd`를 실행하면 새 디렉터리가 표시됩니다.

```bash
$ pwd
Path
----
cedric

$ cd thank_you_drafts

$ pwd
Path
----
cedric/thank_you_drafts
```

> ⚠️ 디렉터리로만 이동할 수 있습니다. 파일에 `cd`하려 하면 현재 작업 디렉터리는 바뀌지 않습니다!

<% } else { %>

세 번째 명령어 `cd`는 "change directory"의 약자로, 터미널의 현재 작업 디렉터리를 바꿉니다. `cd` 뒤에 이동할 디렉터리 이름을 입력하면 됩니다. 이후 `pwd`를 실행하면 새 디렉터리가 표시됩니다.

```bash
$ pwd
cedric

$ cd thank_you_drafts

$ pwd
cedric/thank_you_drafts
```

> ⚠️ 디렉터리로만 이동할 수 있습니다. 파일에 `cd`하려 하면 현재 작업 디렉터리는 바뀌지 않습니다!

<% } %>

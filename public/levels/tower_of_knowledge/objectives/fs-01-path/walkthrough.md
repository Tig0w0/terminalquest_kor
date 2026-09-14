<% const isWindows = context.systemInfo.os === 'win32'; %>

# 파일 경로란 무엇인가요?

컴퓨터는 데이터를 파일에 저장합니다. 일반 텍스트 파일(보통 `.txt`로 끝남), 음악과 동영상(`.mp3`, `.mp4`), 애플리케이션 전체까지 다양한 파일이 있습니다. 컴퓨터는 수많은 파일을 사용하므로 디렉터리 또는 폴더로 정리하면 편리합니다. 디렉터리 안에는 파일뿐 아니라 다른 디렉터리도 넣을 수 있습니다.

파일 경로는 컴퓨터의 파일로 찾아가는 지도와 같습니다. 파일 경로에는 그 파일을 찾기 위해 거쳐야 할 디렉터리가 모두 담깁니다. 경로 속 각 디렉터리는 파일로 가는 여정의 한 단계이며, 모든 파일과 디렉터리에는 경로가 있습니다.

예를 들어 `portfolio` 디렉터리에 `about_me.md` 파일을 만들었다면 경로는 다음과 같습니다.
<%= `\`${formatPathPartsForOs('portfolio', 'about_me.md')}\``%>

실제 컴퓨터에서 만든다면 사용자 계정의 문서 또는 홈 디렉터리 안에 둘 가능성이 크므로 경로가 더 깁니다.

`<%= isWindows ? `C:\\Users\\Cedric\\portfolio\\about_me.md`:`/home/Cedric/portfolio/about_me` %>`

파일 경로의 첫 디렉터리를 **루트 디렉터리**라고 합니다. 파일 구조를 뿌리에서 가지가 뻗는 나무처럼 나타내는 경우가 많기 때문입니다.

## 파일 경로 사용하기

파일의 위치를 알려 줄 때마다 경로를 사용합니다. 함께 프로젝트를 만드는 사람에게 파일의 위치를 전달하거나, 코드에서 다른 파일을 사용할 때도 필요합니다. HTML로 웹사이트에 이미지를 넣는 예를 봅시다.

```
<img src="/images/cedric_headshot.png">
```

이것은 **상대 경로**입니다. 파일의 전체 경로인 **절대 경로**를 항상 쓸 필요는 없습니다. 프로젝트에서는 루트가 아니라 프로젝트를 담은 디렉터리에서 출발하는 상대 경로를 자주 사용합니다.

JavaScript 테스트 연구소와 Python 사원 등 여러 TwilioQuest 미션에서도 이후 작성할 코드를 찾을 수 있도록 파일 경로를 요구합니다.

## 과제 완료하기

세드릭의 파일과 폴더를 다시 살펴봅시다.

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

이것을 파일 트리라고 합니다. `cedric/`은 트리의 다른 모든 디렉터리와 파일을 담은 루트 디렉터리입니다. `robot_thoughts/`와 `thank_you_drafts/`는 파일을 담고 있고 슬래시로 끝나므로 디렉터리임을 알 수 있습니다. 파일을 담을 수 있는 것은 디렉터리뿐입니다. 세드릭의 동영상은 `robot_thoughts/` 안에 있습니다.

파일 이름 뒤의 "파일 확장자"는 사용자와 프로그램에 파일 내용의 종류를 알려 줍니다. `.mp4` 확장자는 동영상 파일이라는 뜻이며, 컴퓨터는 이를 보고 파일을 열 프로그램을 선택합니다.

경로를 만들려면 루트 디렉터리에서 출발해 트리를 따라가며 거치는 디렉터리를 차례로 추가하세요. 마지막에는 `youtube_video.mp4` 파일이 옵니다. 트리의 각 디렉터리는 슬래시로 구분합니다.

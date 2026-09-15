# JavaScript 코드 실행 방법 배우기

이 과제의 목표는 컴퓨터에서 JavaScript 프로그램을 생성하고 실행하는 과정에 익숙해지는 것입니다. 이번 과제에서는 목표 달성에 필요한 모든 코드를 제공해 드릴 것입니다. 하지만 앞으로 이어질 과제들에서는 직접 코드를 더 많이 작성하셔야 합니다!

<details>
<summary>1단계: JavaScript 코드 파일 만들기</summary>

먼저 여러분의 TwilioQuest 작업 공간으로 지정했던 폴더 안에 `sayPlease.js`라는 이름의 새 파일을 만들어야 합니다. 다시 한번 알려드리자면, 해당 폴더의 경로는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

**파일 확장자(file extension)** (여기서는 `.js` 부분)는 어떤 종류의 파일을 만들고 있는지 알려주는 역할을 합니다. 예를 들어 소리 파일은 `.mp3`, 마이크로소프트 워드 문서는 `.docx` 확장자를 가집니다. JavaScript 파일은 (보통) `.js` 확장자를 사용합니다.

나중에 JavaScript 코드를 실행할 때 터미널 인터페이스를 어차피 사용해야 하므로, 터미널을 이용해 파일을 생성하는 편이 훨씬 편리할 것입니다.

Mac이나 Linux를 사용하신다면 터미널 앱에서 다음 명령어들을 사용해 파일을 생성하세요:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
touch sayPlease.js
```

Windows의 PowerShell을 사용하신다면 다음 명령어들을 사용하세요:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
New-Item sayPlease.js
```

</details>


<details>
<summary>2단계: 파일을 열고 솔루션 코드 작성하기</summary>

JavaScript 파일을 생성했다면 이제 코드를 안에 넣을 차례입니다! 이미지 파일을 열고 편집하기 위해 포토샵을 사용하는 것과 비슷하게, 코드 파일을 편집하려면 컴퓨터에 설치된 전용 프로그램이 필요합니다. 프로그래밍에서 이러한 도구들을 **통합 개발 환경(Integrated Development Environments, IDEs)** 또는 **텍스트 에디터(text editors)** 라고 부릅니다.

만약 이런 프로그램이 설치되어 있지 않다면, [Visual Studio Code (VS Code)](https://code.visualstudio.com/)를 권장합니다. VS Code는 프로그래밍용 텍스트 에디터로 비교적 가볍지만 유용한 기본 기능들이 많이 탑재되어 있으며, 익숙해지면 매우 복잡하고 강력한 작업들도 수행할 수 있습니다.

VS Code나 선호하는 다른 텍스트 에디터를 사용해 방금 만든 `sayPlease.js` 파일을 여세요. 처음엔 파일 안이 비어있을 것입니다.

이번 과제에서는 필요한 모든 코드를 저희가 제공해 드립니다. 아래 코드를 파일 안에 복사해서 붙여넣으세요. 아직 이 코드가 무슨 의미인지 완벽히 이해하지 못해도 걱정하지 마세요. 곧 보시겠지만, 이는 터미널 창에 한 줄의 텍스트를 출력하기 위해 `console.log`라는 내장 JavaScript 함수를 사용하는 것입니다:

```js
console.log('Glen, will you please open the barrier?');
```

파일에 코드를 추가한 후에는 반드시 **저장(Save)** 해주세요! 이제 코드를 실행하고 결과를 확인할 준비가 되었습니다.

</details>

<details>
<summary>3단계: 코드 실행하고 작동 확인하기</summary>

이제 앞서 설치해 둔 Node.js 런타임을 이용해 `sayPlease.js` 안의 코드를 실제로 실행해 볼 것입니다. 보통 이 작업은 컴퓨터의 명령 프롬프트 애플리케이션(Mac의 Terminal.app, Windows의 PowerShell)을 사용해 진행합니다.

터미널 애플리케이션을 열고 다음 명령어를 입력하여 현재 여러분의 '작업 디렉터리(current working directory)'가 `sayPlease.js`를 만든 폴더로 맞춰지도록 하세요.

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
```

그다음, `node` 명령어를 이용해 여러분의 JavaScript 코드를 실행하세요:

```bash
node sayPlease.js
```

위 명령어를 실행하면, 글렌(Glen)에게 보내는 정중한 부탁 메시지가 콘솔에 출력되는 것을 확인하실 수 있습니다.

</details>

TwilioQuest를 진행하는 동안, 위에서 설명한 것과 똑같은 방식으로 수많은 코드 파일들을 생성하고, 편집하고, 실행하게 될 것입니다.

여러분의 `sayPlease.js` 파일이 성공적으로 실행되어 필수 메시지를 출력할 수 있게 되었다면, *HACK* 버튼을 클릭하여 IT 부서에 요청을 전송하세요.

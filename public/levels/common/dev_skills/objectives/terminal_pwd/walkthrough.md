# 명령어로 정복하기

많은 사람은 [그래픽 사용자 인터페이스(graphical user interface)](https://techterms.com/definition/gui), 줄여서 **GUI**를 통해 컴퓨터를 사용합니다. GUI에서는 버튼을 클릭하거나 마우스로 창을 끄는 등 화면에 보이는 요소와 상호작용하여 컴퓨터에 할 일을 지시합니다.

직접 소프트웨어를 만들려면 평소보다 **더 낮은 수준의 명령을 컴퓨터에 전달**해야 합니다. 이때 흔히 [명령줄 인터페이스(command line interface)](https://techterms.com/definition/command_line_interface), 줄여서 **CLI**를 사용합니다. GUI에서 버튼을 클릭하는 것과 달리 CLI에서는 컴퓨터가 할 일을 **명령어(command)**로 직접 입력합니다. 명령어를 실행하면 보통 처리 결과나 요청한 정보가 텍스트로 출력됩니다.

장벽을 해제하려면 컴퓨터에서 **명령줄 인터페이스**를 제공하는 앱을 실행해야 합니다. 그런 다음 명령어를 실행하고 어떤 결과가 나오는지 확인하세요. 화면은 다음과 비슷할 것입니다.

![terminal app PWD output](images/dev_skills/pwd.png)

macOS와 Linux 계열 컴퓨터에서는 [Terminal](https://support.apple.com/guide/terminal/welcome/mac)을, Windows에서는 [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-7)을 사용합니다. 다른 CLI 앱도 사용할 수 있지만, 위 두 앱은 각 운영체제에 기본으로 설치되어 있습니다.

## 명령어 실행하기

컴퓨터에는 다양한 작업을 수행하는 [내장 명령어(built-in command)](https://www.educative.io/blog/bash-shell-command-cheat-sheet)가 마련되어 있습니다. 명령어는 컴퓨터에 특정 작업을 요청하거나 정보를 요구하는 문자열로, 단어 또는 약어 형태인 경우가 많습니다.

이번 훈련에 필요한 명령어는 다음과 같습니다.

```bash
pwd
```

`pwd`는 `print working directory`를 뜻합니다. 지금 모두 이해할 필요는 없지만 [여기에서 자세히 알아볼 수 있습니다](https://shapeshed.com/unix-pwd/). CLI에는 항상 "작업 디렉터리(working directory)"라는 개념이 있으며, 이는 현재 명령을 실행하고 있는 [컴퓨터의 폴더](https://kids.kiddle.co/File_system)를 의미합니다. CLI 앱의 기본 작업 디렉터리는 보통 [홈 폴더(home folder)](https://kids.kiddle.co/Home_directory)입니다. 파일과 폴더는 뒤에서 더 자세히 다룹니다.

명령어를 입력한 뒤 **Enter 키**를 누르면 명령어가 **실행(execute)**됩니다. 컴퓨터는 요청받은 작업을 수행하고, 명령어가 제공하는 정보를 화면에 출력합니다.

여기서는 CLI 앱의 "작업 디렉터리"가 출력됩니다. 출력값은 [파일 경로(file path)](https://kids.kiddle.co/Computer_file#Identifying_and_organizing)이며, 브라우저에 입력하는 웹 주소와 비슷합니다. 컴퓨터 안에서 해당 폴더가 어디에 있고 어떤 폴더 안에 포함되어 있는지를 나타냅니다.

Windows에서는 다음과 비슷한 결과가 나옵니다.

```bash
Path
----
C:\Users\kwhinnery
```

장벽을 HACK할 때는 반드시 **출력의 마지막 줄만** 붙여 넣으세요. PowerShell 창에서 텍스트를 복사하려면 마우스로 텍스트를 드래그해 선택한 뒤 _마우스 오른쪽 버튼_을 클릭하면 됩니다.

Mac에서는 `pwd` 명령어의 출력이 다음과 비슷합니다.

```bash
/Users/kwhinnery
```

이 경우 출력이 한 줄뿐이므로 그 값을 오른쪽 입력란에 넣으면 됩니다. Terminal 창에서 텍스트를 복사하려면 마우스로 선택하고 _마우스 오른쪽 버튼_을 클릭한 뒤 메뉴에서 `Copy`를 선택하세요.

`pwd` 명령어를 실행한 뒤 **출력의 마지막 줄**을 오른쪽 입력란에 붙여 넣고 *HACK*을 클릭하세요. TerminalQuest가 경로가 올바른지 검사하고, 정답이면 다음으로 진행할 수 있습니다!

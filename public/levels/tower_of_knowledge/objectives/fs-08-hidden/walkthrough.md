<% const isWindows = context.systemInfo.os === 'win32'; %>

# 숨김 파일

숨김 파일은 그래픽 파일 탐색기나 `ls` 같은 명령줄 도구로 파일 시스템을 탐색할 때 기본적으로 표시되지 않는 파일입니다.

보통 자주 사용하지 않는 파일이나 운영체제·프로그램이 내부 정보를 저장하기 위해 만든 파일을 숨깁니다. 예를 들어 프로그램 설정은 사용자가 텍스트 편집기로 직접 바꾸기보다 설정 메뉴로 바꾸도록 숨김 파일에 저장될 수 있습니다.

직접 숨김 파일을 만들기도 합니다. 대표적인 `.gitignore`는 코딩 프로젝트에서 `git` 버전 관리 시스템이 특정 파일을 무시하도록 알려 줍니다. 처음 만든 뒤 자주 열 필요가 없어 보통 숨겨 둡니다.

숨김 파일 이름은 흔히 `.`으로 시작합니다. Linux 등 Unix 계열 시스템에서는 이름이 `.`으로 시작하는 파일과 폴더가 숨겨집니다. Windows에서는 파일에 `hidden` 속성을 지정해야 하며 이름 앞의 `.`만으로 숨겨지지는 않습니다. 하지만 Unix 계열 시스템이 개발자에게 널리 쓰이므로 Windows에서도 `.`으로 시작하는 파일을 자주 보게 됩니다.

<% if(isWindows) { %>

Windows에서는 파일 속성을 바꿔 숨깁니다. PowerShell에서 `attrib +h`를 사용하세요. 먼저 `ni yourhiddenfilename.txt`로 파일을 만들고 `attrib +h yourhiddenfilename.txt`로 숨김 속성을 지정합니다.

<% } else { %>

Linux와 macOS에서는 `.gitignore`처럼 이름 앞에 `.`을 붙이면 숨김 파일이 됩니다. `touch .yourhiddenfile.txt`로 바로 만들 수 있습니다. 기존 파일은 이름을 바꾸고 이동하는 `mv` 명령어로 숨길 수 있습니다. `mv notahiddenfile.txt .nowahiddenfile.txt`는 이름 앞에 `.`을 붙여 숨김 파일로 바꿉니다.

<% } %>

# 숨김 파일 표시하기

숨김 파일은 기본적으로 보이지 않지만 그래픽 및 명령줄 파일 탐색기에서 표시할 수 있습니다.

<% if(isWindows) { %>

PowerShell에서는 `dir -ah`로 숨김 파일을 볼 수 있습니다. `-ah`는 "Attributes: Hidden", 즉 숨김 속성이 있는 파일을 표시하는 플래그입니다.

## PowerShell 별칭 다시 보기

앞에서 사용한 PowerShell의 `ls`는 자체 명령어 `dir`의 별칭입니다. Unix의 `ls`와 이름은 같지만 옵션은 다릅니다. Unix에서 숨김 파일을 표시하는 `ls -a`를 PowerShell에서 실행하면 오류가 발생합니다. PowerShell의 `-a`는 속성을 선택하는 플래그의 시작이므로 뒤에 속성 글자가 더 필요합니다. `-ah`의 `h`가 숨김 속성을 뜻합니다.

<% } else { %>

Linux와 macOS에서는 `ls -a`로 숨김 파일을 표시합니다. `-a`는 이름이 `.`으로 시작하는 파일과 폴더를 모두 보여 주는 플래그입니다.

<% } %>

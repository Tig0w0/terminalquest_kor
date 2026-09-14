<% const isWindows = context.systemInfo.os === 'win32'; %>

# 직접 파일 만들기

<div class="aside">
<h3>요구 사항</h3>
<ul>
<% if(isWindows) { %>
  <li><b>ni</b>로 새 파일을 만드세요.</li>
<%} else { %>
  <li><b>touch</b>로 새 파일을 만드세요.</li>
<% } %>
  <li>파일 이름을 복사해 오른쪽 입력란에 입력하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

연습할 디렉터리가 생겼으니 이제 파일을 만들어 봅시다!

<% if(isWindows) { %>

새 파일은 "new item"의 약자인 `ni` 명령어로 만들 수 있습니다. `ni yourfilename`처럼 명령어 뒤에 파일 이름을 입력하세요.

```bash
$ ls
*아무것도 표시되지 않아야 함*

$ ni cloud.txt

$ ls
cloud.txt
```

`ni yourfilename`으로 원하는 이름의 파일을 만들고 새 파일 이름을 복사하세요. 앞서 배운 `cd`와 `pwd`도 활용할 수 있습니다. 오른쪽 입력란에 이름을 넣고 _해킹_ 버튼을 누르세요.

<% } else { %>

명령줄에서 파일을 만드는 방법은 여러 가지지만 `touch`가 간편합니다. `touch yourfilename`처럼 명령어 뒤에 파일 이름을 입력하세요. `touch`는 본래 파일의 접근·수정 시간을 바꾸지만 파일이 없으면 새로 만듭니다.

```bash
$ ls
*아무것도 표시되지 않아야 함*

$ touch cloud.txt

$ ls
cloud.txt
```

`touch`로 원하는 이름의 파일을 만들고 새 파일 이름을 복사하세요. 오른쪽 입력란에 이름을 넣고 _해킹_ 버튼을 누르세요.

<% } %>

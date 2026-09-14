<% const isWindows = context.systemInfo.os === 'win32'; %>

# 직접 디렉터리 만들기

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li><b>mkdir</b>로 새 디렉터리를 만드세요.</li>
  <li>이 디렉터리의 파일 경로를 확인하세요.</li>
  <li>오른쪽 입력란에 경로를 입력하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

기존 디렉터리로 이동할 수 있게 되었으니 직접 만드는 법을 배워 봅시다!

<% if(isWindows) { %>

`mkdir`, 즉 "make directory" 명령어를 사용합니다. 터미널에서 `mkdir` 뒤에 만들 디렉터리 이름을 입력하세요.

```bash
$ ls
old_directory

$ mkdir new_directory

$ ls
old_directory new_directory
```

`mkdir`로 원하는 이름의 새 디렉터리를 만들고 그곳으로 이어지는 경로를 찾으세요. 앞서 배운 `cd`와 `pwd`가 도움이 됩니다. 새 디렉터리의 경로를 입력하고 _해킹_ 버튼을 누르세요.

<% } else { %>

`mkdir`, 즉 "make directory" 명령어를 사용합니다. 터미널에서 `mkdir` 뒤에 만들 디렉터리 이름을 입력하세요.

```bash
$ ls
old_directory

$ mkdir new_directory

$ ls
old_directory new_directory
```

`mkdir`로 원하는 이름의 새 디렉터리를 만들고 그곳으로 이어지는 경로를 찾으세요. 앞서 배운 `cd`와 `pwd`가 도움이 됩니다. 새 디렉터리의 경로를 입력하고 _해킹_ 버튼을 누르세요.

<% } %>

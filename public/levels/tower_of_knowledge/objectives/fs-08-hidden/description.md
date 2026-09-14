<% const isWindows = context.systemInfo.os === 'win32'; %>

# 숨김 파일 만들기

<div class="aside">
<h3>요구 사항</h3>
<ul>
<% if(isWindows) { %>
  <li><b>ni</b>로 디렉터리에 `sneaky.txt` 파일을 만드세요.</li>
  <li><b>attrib +h</b>로 파일을 숨김 처리하세요.</li>
<% } else { %>
  <li><b>touch</b>로 디렉터리에 `.sneaky.txt` 숨김 파일을 만드세요.</li>
<% } %>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

숨김 파일을 만드는 방법을 배워 봅시다!

<% if(isWindows) { %>

`ni`로 파일을 만들고 `attrib`로 숨김 속성을 지정합니다. `ni yourfilename.txt`로 만든 뒤 `attrib +h yourfilename.txt`를 실행하세요.

```bash
$ ls -ah
*아무것도 표시되지 않아야 함*

$ ni spoon.txt
$ attrib +h spoon.txt

$ ls -ah
spoon.txt
```

`ni`로 `sneaky.txt`를 만들고 `attrib +h`로 숨김 처리한 뒤 _해킹_ 버튼을 누르세요.

<% } else { %>

`touch` 명령어와 점으로 시작하는 파일 이름을 사용하면 파일을 만들면서 숨길 수 있습니다. 예: `touch .yourfilename`

```bash
$ ls -a
*아무것도 표시되지 않아야 함*

$ touch .spoon.txt

$ ls -a
.spoon.txt
```

`touch`로 `.sneaky.txt` 숨김 파일을 만든 뒤 _해킹_ 버튼을 누르세요.

<% } %>

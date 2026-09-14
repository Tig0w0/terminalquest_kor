# 과제 도움말

먼저 컴퓨터에 [Node.js를 설치](https://www.nodejs.org)해야 합니다. 앞으로 작성할 JavaScript 코드를 이 도구로 실행합니다.

## Node.js 런타임의 전체 경로 찾기

Node를 설치하면 명령줄에서 `node`와 `npm` 명령어를 사용할 수 있습니다. macOS와 Linux에서는 다음 명령어로 전체 경로를 확인하세요.

```bash
which node
```

Windows PowerShell에서는 다음 명령어를 사용할 수 있습니다.

```powershell
Get-Command node.exe | Select-Object -ExpandProperty Definition
```

전체 경로를 오른쪽 입력란에 붙여 넣고 *해킹*을 누르세요.

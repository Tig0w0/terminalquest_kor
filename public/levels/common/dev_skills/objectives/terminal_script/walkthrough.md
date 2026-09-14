# 스크립트 만들기

스크립트(script)는 여러 명령어를 순서대로 적어 둔 텍스트 파일입니다. 자주 쓰는 명령이나 복잡한 작업을 스크립트로 저장해 두면 매번 다시 입력하지 않고 같은 작업을 정확하게 반복할 수 있습니다.

이번 과제에서는 `quest` 폴더 안에 스크립트를 만들고, `echo` 명령어로 텍스트 한 줄을 출력해 봅니다. `echo`는 뒤에 적은 텍스트를 화면에 출력하는 명령어입니다.

## Windows PowerShell

먼저 이전 과제에서 만든 `quest` 폴더로 이동하세요.

```powershell
cd ~/quest
```

다음 명령어는 `echo` 명령이 들어 있는 `my_script.ps1` 파일을 만듭니다.

```powershell
'echo "Hello from my script!"' | Set-Content my_script.ps1
```

스크립트를 실행하려면 다음과 같이 입력합니다.

```powershell
./my_script.ps1
```

파일의 전체 경로는 다음 명령어로 확인할 수 있습니다.

```powershell
(Resolve-Path ./my_script.ps1).Path
```

## Mac 또는 Linux

먼저 `quest` 디렉터리로 이동하세요.

```bash
cd ~/quest
```

다음 명령어는 `echo` 명령이 들어 있는 `my_script.sh` 파일을 만듭니다.

```bash
echo 'echo "Hello from my script!"' > my_script.sh
```

실행 권한을 추가한 뒤 스크립트를 실행하세요.

```bash
chmod +x my_script.sh
./my_script.sh
```

파일의 전체 경로는 다음 명령어로 확인할 수 있습니다.

```bash
realpath my_script.sh
```

출력된 전체 경로를 오른쪽 입력란에 붙여 넣고 *HACK*을 클릭하세요.

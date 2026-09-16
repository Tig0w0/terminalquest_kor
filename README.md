# TerminalQuest (터미널 퀘스트)

커서의 부름에 응답하고, 코드로 세상을 바꿀 수 있는 당신의 힘을 발견하세요.

**TerminalQuest**는 플레이어가 '오퍼레이터(Operator)'라는 엘리트 요원이 되어 가상 우주인 '더 클라우드(The Cloud)'를 탐험하고 안전하게 지켜내는 어드벤처 롤플레잉 게임입니다. 이 임무를 완수하려면 소프트웨어 개발 도구와 프로그래밍 지식을 마스터해야 합니다. 사악한 '레거시 시스템(Legacy Systems)'을 물리치고 클라우드를 구해낼 준비가 되셨나요?

## 게임 플레이

현재 이 게임은 소유권 이전 후 활발하게 개발이 진행 중입니다. 일반 유저가 쉽게 플레이할 수 있는 정식 빌드 버전이 곧 출시될 예정입니다!

## 로컬 개발 환경 설정

TerminalQuest를 개발하고 실행하려면 다음 프로그램들이 설치되어 있어야 합니다:

* [Node.js](https://nodejs.org/ko) 및 [npm](https://www.npmjs.com/) - 이 게임은 최신 Node.js 환경(Node 18 ~ Node 24 등)에서 테스트되고 구동됩니다.
* [Python](https://www.python.org/downloads/) - 일부 의존성 패키지 설치 및 구성을 위해 현재 필요합니다. Python 3.9 버전 사용을 권장하며, 3.11 이상의 버전은 빌드 시 문제를 일으킬 수 있습니다.

이 저장소를 클론(clone)한 후, 다음 명령어를 입력하여 의존성 패키지들을 설치하세요:

```bash
npm install --legacy-peer-deps
```

> **참고:** 현재 과도기적인 개발 단계이므로, 패키지 간의 구버전 의존성 충돌을 방지하기 위해 패키지 설치 시 반드시 `--legacy-peer-deps` 옵션을 포함해야 합니다.

패키지 설치가 성공적으로 완료되면, 다음 명령어를 통해 개발 모드로 게임을 실행할 수 있습니다:

```bash
npm start
```

이 명령어를 실행하면 로컬 [Electron](https://www.electronjs.org/) 창이 열리면서 게임이 구동됩니다.

## 세이브 파일 연동 및 백업

TerminalQuest는 **오토세이브(자동 저장)** 방식을 사용하며, 플레이 데이터는 로컬 시스템에 저장됩니다. 다른 PC나 환경에서 진행 상황을 이어서 하려면 다음 2개의 파일을 백업하여 새 PC의 동일한 경로에 덮어씌워 주세요.

1. **`config.json`** (퀘스트 진행도 및 플레이어 설정 데이터)
2. **`user_code.js`** (인게임 에디터에서 작성 중이던 코드 내역)

**[OS별 세이브 파일 기본 경로]**

* **Windows**
  * `C:\Users\사용자이름\AppData\Roaming\terminalquest\config.json`
  * `C:\Users\사용자이름\AppData\Roaming\TerminalQuest\QuestIDE\user_code.js`
* **macOS**
  * `~/Library/Application Support/terminalquest/config.json`
  * `~/Library/Application Support/TerminalQuest/QuestIDE/user_code.js`
* **Linux**
  * `~/.config/terminalquest/config.json`
  * `~/.config/TerminalQuest/QuestIDE/user_code.js`

## 라이선스

이 게임의 소스 코드는 MIT 라이선스를 따릅니다 (상세 내용은 `LICENSE` 파일 참조).

이 저장소에 포함된 아트워크, 음악 및 기타 창작 자산은 [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) 라이선스를 따릅니다.

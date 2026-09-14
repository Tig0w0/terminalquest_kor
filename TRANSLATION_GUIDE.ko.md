# TerminalQuest 한국어 번역 지침

이 프로젝트의 번역 목표는 한국어 사용자가 이야기에 몰입하면서도 실제 개발 현장에서 사용하는 용어와 명령어를 정확히 익히도록 돕는 것이다.

## 기본 원칙

- 이야기, 대화, 설명과 일반 UI 문구는 자연스러운 한국어로 번역한다.
- 처음 배우는 핵심 용어는 `작업 디렉터리(working directory)`처럼 한국어와 영어를 함께 표시한다.
- 이미 널리 쓰이는 약어는 `명령줄 인터페이스(CLI)`처럼 원래 약어를 유지한다.
- 사용자가 직접 입력해야 하는 명령어, 코드, 파일명, 경로, API 이름과 식별자는 번역하지 않는다.
- 실제 앱이나 제품에서 찾아야 하는 메뉴 및 프로그램 이름은 필요할 때 원문을 병기한다.
- 검증기가 요구하는 입력값은 번역문에도 정확하게 표시한다. 예: `true`, `false`, `quest`.
- Markdown 코드 블록, HTML 태그, Pug 구조, EJS 표현식과 URL은 번역 과정에서 변경하지 않는다.

## 기준 용어

| 원문 | 한국어 표기 | 참고 |
| --- | --- | --- |
| command line interface | 명령줄 인터페이스(CLI) | 첫 등장 이후 CLI 사용 가능 |
| command | 명령어(command) | 코드 안의 명령어는 원문 유지 |
| terminal | 터미널(terminal) | 앱 이름 `Terminal`은 원문 유지 |
| shell | 셸(shell) | 음역 사용 |
| working directory | 작업 디렉터리(working directory) | `pwd`, `cd`는 유지 |
| directory | 디렉터리(directory), 폴더 | 초보자 설명에서는 폴더와 함께 사용 |
| file path | 파일 경로(file path) | 실제 경로는 변경하지 않음 |
| script | 스크립트(script) | 확장자 `.sh`, `.ps1` 유지 |
| environment variable | 환경 변수(environment variable) | 변수 이름은 원문 유지 |
| extension | 확장 기능(extension) | 파일 확장자와 혼동하지 않도록 문맥 확인 |
| objective | 과제 | 게임 내 달성 단위 |
| mission | 미션 | 고유한 게임 용어로 유지 |
| quest | 퀘스트 | 폴더명 `quest`는 번역하지 않음 |
| inventory | 인벤토리 | 게임 UI 용어 |
| rank | 랭크 | 등급 문자 S~E는 유지 |
| Operator | 오퍼레이터 | 플레이어의 세계관 호칭 |
| Fog Owl | 포그 아울(Fog Owl) | 첫 등장에 원문 병기 |

## 번역하지 않는 예

```text
pwd
mkdir quest
cd quest
my_script.ps1
TQ_TWILIO_ACCOUNT_SID
```

내부 키인 `levelName`, `objectiveName`, Pug의 `statement#default`와 대화 분기 값도 화면에 표시되는 문장이 아니므로 변경하지 않는다.

## 번역 파일 배치

내장 미션은 `public/node_modules/twilioquest-*` 아래에 설치되지만 이 디렉터리는 의존성을 다시 설치할 때 사라진다. 따라서 해당 파일을 직접 수정하지 않는다.

지속해서 유지할 번역은 원본과 같은 상대 경로를 `public` 아래에 만든 뒤 저장한다. 로더는 사용자 설치 확장 기능, 로컬 `public` 오버레이, 내장 npm 확장 기능 순으로 파일을 찾는다.

예를 들어 다음 원본을 번역한다면:

```text
public/node_modules/twilioquest-base/levels/fog_owl/level.json
```

번역 파일은 다음 위치에 둔다.

```text
public/levels/fog_owl/level.json
```

번역하지 않은 파일은 원래 내장 확장 기능에서 자동으로 불러오므로 미션 전체를 복사할 필요가 없다.

레벨 제목과 짧은 소개처럼 구조가 일정한 메타데이터는 `src/js/app/config/koreanContent.js`에서 레벨 ID별로 관리한다. 긴 Markdown 본문, Pug 대화와 검증 피드백은 `public` 오버레이에 원본과 같은 경로로 배치한다.

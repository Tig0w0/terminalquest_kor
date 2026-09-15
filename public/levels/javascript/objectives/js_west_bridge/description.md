# 생명이 있으라

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>treeLifeDetector.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>명령줄 인수로 숫자 <code>0</code>이 전달되면, <code>alive</code>를 출력하세요.</li>
  <li>명령줄 인수로 그 외의 다른 숫자가 전달되면, <code>other</code>를 출력하세요.</li>
</ul>
</div>

연구소에서 서쪽 다리를 확장할 방법을 찾던 중 이 제어판을 발견합니다. 서쪽 다리가 비활성화된 이유는 연구소의 **나무 생명 탐지기(Tree Life Detector)** 시스템이 손상되었기 때문인 것 같습니다.

식물학자를 향해 계속 나아가려면 먼저 **나무 생명 탐지기를 수리해야 합니다**.

## 나무 생명 탐지기 수리하기

코드 폴더에 `treeLifeDetector.js`라는 이름의 파일을 만드세요. 이 프로그램은 단 하나의 **명령줄 인수(command line argument)**를 받습니다 - 현재 나무의 생명 상태를 나타내는 한 자리 `Number`(숫자)입니다. 제어판 옆에는 나무의 생명 상태 ID와 사람이 읽을 수 있는(human-readable) 문자열의 현재 매핑 관계가 붙어 있습니다:

| 생명 상태 ID(Tree Life Status ID) | 나무 상태(Tree Status) |
| ------------------- | ----------- |
| 0 | "alive" |
| 1 | "other" |
| 2 | "other" |
| 3 이상 | "other" |

여러분의 스크립트가 실행될 때, 전달받은 ID 숫자를 바탕으로 사람이 읽을 수 있는 올바른 문자열 텍스트를 출력해야 합니다.

스크립트가 다음과 같이 실행될 경우:

```bash
node treeLifeDetector.js 0
```

`alive` 문자열을 출력해야 합니다.

그 외의 다른 숫자로 스크립트가 실행될 경우, 예를 들면:

```bash
node treeLifeDetector.js 2
```

`other` 문자열을 출력해야 합니다.

여러분의 `treeLifeDetector.js` 스크립트가 이와 같이 정상 동작한다면, _HACK_ 버튼을 클릭하여 수리 작업을 검증받으세요!

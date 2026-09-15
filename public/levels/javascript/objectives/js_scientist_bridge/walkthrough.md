# 코드를 분기하세요, 아니면 말고(Else)!

이 연습 과제의 목표는 [else-if 문(else-if statement)](https://ko.javascript.info/ifelse#several-conditions-else-if)의 사용법을 배우는 것입니다. 조건 논리(conditional logic)가 여러 개의 다른 방향 중 하나로 나뉘어져야(분기되어야) 할 때 이 구문을 사용합니다.

[MDN에서 else-if 문이 어떻게 작동하는지 더 자세히 알아보세요](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals).

다음은 `else-if`를 사용하는 if 문의 간단한 예시입니다:

```js
const ninjaTurtle = 'Leonardo';

if (ninjaTurtle === 'Leonardo') {
  console.log('leads');
} else if (ninjaTurtle === 'Donatello') {
  console.log('does machines');
} else if (ninjaTurtle === 'Raphael') {
  console.log('cool, but cruel');
} else if (ninjaTurtle === 'Michelangelo') {
  console.log('party dude');
} else {
  console.log('not a ninja turtle');
}
```

이 예제에서는 `ninjaTurtle` 변수의 현재 값에 따라 각기 다른 문자열이 출력됩니다.

## 나무 생명 탐지기 고치기

다리를 확장하려면 코드 폴더에 `enhancedLifeDetector.js`라는 이름의 파일을 만들어야 합니다. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

여러분은 [명령줄 인수(command line argument)](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) 하나를 처리해야 합니다 - 나무가 살아있는지, 꽃을 피우는지 등 상태를 지정하는 한 자리 숫자입니다.

아래는 스크립트에 전달된 첫 번째 인수의 값을 가져오는 코드입니다. 이것을 시작 코드로 사용할 수 있습니다.

```js
// 아래 코드들은 명령줄에서 인수를 가져옵니다
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// 이 아래에 여러분의 if 문을 작성하세요!

```

아래와 같이 코드를 실행하여 테스트해 볼 수 있습니다 - 다음 명령어는 문자열 `flowering`을 출력해야 합니다:

```bash
node enhancedLifeDetector.js 1
```

다음 명령어는 문자열 `other`를 출력해야 합니다:

```bash
node enhancedLifeDetector.js 3
```

숫자에 따른 다른 상태 값들은 **과제(Objective)** 탭의 표에 나열되어 있습니다.

스크립트가 과제 설명대로 올바르게 작동한다면, _HACK_ 버튼을 클릭하여 작업을 검증받으세요!

## 유용한 리소스

* [MDN 조건문 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - else-if 문](https://ko.javascript.info/ifelse#several-conditions-else-if)

# 코드를 분기하세요, 아니면 말고(Else)!

이 연습 과제의 목표는 [else 문(else statement)](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)을 사용하는 방법을 배우는 것입니다. 앞서 우리는 특정 조건이 충족될 때 실행할 코드 블록을 지정하기 위해 [if 문](https://ko.javascript.info/ifelse#the-if-statement)을 사용했습니다. `else` 문을 사용하면, 그 특정 조건을 제외한 '모든 다른 상황'에서 실행될 코드를 지정할 수 있습니다.

[MDN에서 if/else 문이 어떻게 동작하는지 더 자세히 알아보세요](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals).

다음은 `else` 절(clause)이 포함된 if 문의 간단한 예시입니다:

```js
const luckyNumber = 7;

if (luckyNumber === 7) {
  console.log('Yup, 7 is a lucky number.');
} else {
  console.log('I think only 7 is a lucky number, right?');
}
```

이 예제에서, `luckyNumber` 변수가 `7`이 아닌 다른 모든 숫자로 설정되어 있을 경우 두 번째 문자열이 출력됩니다.

## 나무 생명 탐지기 수리하기

다리를 확장하려면 코드 폴더에 `treeLifeDetector.js`라는 이름의 파일을 생성해야 합니다. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

여러분은 [명령줄 인수(command line argument)](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) 하나를 처리해야 합니다 - 나무가 살아있는지, 아니면 다른 상태인지 지정해주는 한 자리 숫자입니다.

아래는 스크립트에 전달된 첫 번째 인수의 값을 가져오는 코드입니다. 이것을 시작 코드로 사용할 수 있습니다.

```js
// 아래 코드들은 명령줄에서 인수를 가져옵니다
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// 이 아래에 여러분의 if 문을 작성하세요!

```

아래와 같이 코드를 실행하여 테스트해 볼 수 있습니다 - 다음 명령어는 문자열 `alive`를 출력해야 합니다:

```bash
node treeLifeDetector.js 0
```

다음 명령어는 텍스트 `other`를 출력해야 합니다:

```bash
node treeLifeDetector.js 3
```

스크립트가 과제 설명대로 올바르게 작동한다면, _HACK_ 버튼을 클릭하여 작업을 검증받으세요!

## 유용한 리소스

* [MDN 조건문 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - Else 절](https://ko.javascript.info/ifelse#the-else-clause)
* [MDN - JavaScript 데이터 타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

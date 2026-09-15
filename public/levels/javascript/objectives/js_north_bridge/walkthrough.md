# If 문(If Statement) 배우기

이 과제의 목표는 [if 문(if statement)](https://ko.javascript.info/ifelse#the-if-statement)을 사용하여 조건에 따라 코드를 실행하는 방법을 배우는 것입니다. 프로그래밍을 하다 보면, 사용자가 로그인했을 때나 특정 파일이 존재할 때 등 특정한 조건이 충족될 때만 코드를 실행하고 싶은 경우가 자주 발생합니다.

[MDN에서 if 문이 어떻게 작동하는지 더 자세히 알아보세요](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals).

다음은 두 개의 텍스트 문자열이 같은지 확인하기 위해 [비교 연산자(comparison operator)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (여기서는 `===` 연산자)를 사용하고, 만약 같다면 텍스트를 출력하는 짧은 if 문 예제입니다:

```js
const animal = 'Dog';

if (animal === 'Dog') {
  console.log('woof!');
}
```

비교문은 [불리언(boolean)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures) 값인 `true`(참) 또는 `false`(거짓)로 평가됩니다. 조건문이 참(true)일 경우에만, if 문 내부(중괄호 `{` `}` 안쪽)의 코드가 실행됩니다.

## 다리 건설하기

다리를 확장하려면 코드 폴더에 `northBridgeControl.js`라는 이름의 파일을 생성해야 합니다. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

수석 과학자의 사무실에서 비밀번호를 가져올 때와 마찬가지로, 여기서도 [명령줄 인수(command line arguments)](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)를 다루어야 합니다. 여러분의 코드는 특정한 인수가 전달되었을 때, 오직 그때만 특정 메시지를 출력해야 합니다.

아래는 스크립트에 전달된 첫 번째 인수의 값을 가져오는 코드입니다. 이것을 시작 코드로 사용할 수 있습니다. 하지만 현재 작성된 if 문은 **작동하지 않습니다(will not work)**. 과제를 해결하려면 코드를 수정해야 합니다.

```js
const argumentValue = process.argv[2];

// 아래의 if 문을 수정하여, "argumentValue"가 
// 문자열 "EXTEND"와 동일할 때만 실행되도록 만드세요.
if (false) {
  console.log('Extending bridge!');
}
```

아래와 같이 코드를 실행하여 테스트해 볼 수 있습니다 - 이 경우에는 메시지가 출력되어야 합니다:

```bash
node northBridgeControl.js EXTEND
```

하지만 아래와 같이 실행하면 아무것도 출력되지 않아야 합니다:

```bash
node northBridgeControl.js GO
```

스크립트가 과제 설명대로 올바르게 작동한다면, _HACK_ 버튼을 클릭하여 작업을 검증받으세요!

## 유용한 리소스

* [MDN 조건문 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - If 문](https://ko.javascript.info/ifelse#the-if-statement)
* [MDN - JavaScript 데이터 타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)

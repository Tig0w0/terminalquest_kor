# JavaScript 함수(Function) 작성법 배우기

이 연습 과제의 목표는 JavaScript에서 [함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하는 방법을 배우는 것입니다. **함수(function)**란 특정한 작업을 수행하기 위해 언제든 반복해서 **호출(call)**할 수 있는 재사용 가능한 코드 블록을 말합니다.

지금까지 보았던 여러 예제에서, 우리는 JavaScript에 내장된 `console.log`라는 함수를 사용했습니다. 이 함수의 역할은 터미널 창에 텍스트 문자열을 출력하는 것입니다. 지금 마주친 장벽을 통과하려면, 여러분만의 고유한 함수를 만들어야 합니다.

코드 폴더에 `laserFunction.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `getLaserSetting`이라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다. 함수가 이미 정의되어 있긴 하지만 현재 잘못된 값을 반환하고 있습니다:

```js
function getLaserSetting() {
  const setting = 42; // <- 이 줄의 코드를 수정해야 합니다!
  return setting;
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);
```

이 과제를 완수하려면 위에서 선언된 함수 안의 내용을 변경해야 합니다. 여는 중괄호와 닫는 중괄호(`{` 와 `}` 문자)는 함수 안쪽 코드의 시작과 끝을 나타냅니다. 오직 `{` 와 `}` 사이에 작성된 코드만이 여러분의 함수 일부로써 실행됩니다!

여러분의 함수는 과제 설명에 명시된 대로 레이저 설정에 맞는 올바른 값을 반드시 **반환(return)**해야 합니다. 변수에 대해 배웠던 내용을 활용하여 필요한 부분을 변경해 보세요. 함수가 과제 탭의 지시대로 잘 작동한다면, _HACK_ 버튼을 클릭하여 작업을 검증받으세요.

## 유용한 링크

* [JavaScript.info 함수 기초 가이드](https://ko.javascript.info/function-basics)
* [함수 선언문](https://ko.javascript.info/function-basics#function-declaration)
* [함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

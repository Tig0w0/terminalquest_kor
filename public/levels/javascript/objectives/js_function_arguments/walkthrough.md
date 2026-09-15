# JavaScript 함수(Function) 작성법 배우기

이 연습 과제의 목표는 **인수(arguments)** (또는 "매개변수(parameters)")를 받는 [함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하는 방법을 배우는 것입니다. **인수**란 함수가 각각 다른 출력값을 생성하기 위해 사용할 수 있는 입력 데이터의 한 조각입니다.

코드 폴더에 `politeLasers.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이 파일 안에는 반드시 `getLaserSetting`이라는 이름의 함수를 만들어야 합니다. 다음은 시작 코드로 활용할 수 있는 예시입니다 - 함수가 정의되어 있기는 하지만, 아직 과제 설명대로 작동하지는 않습니다:

```js
function getLaserSetting(magicWord) {
  if (magicWord === '여기에 마법의 단어가 들어갑니다') {
    return '어떤 값이 되어야 할까요?';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting('지금 당장!');
console.log('The current laser setting is: ' + currentSetting);
```

과제(Objective) 탭에 명시된 바와 같이, 함수에 전달되는 첫 번째 인수(위 예제에서는 `magicWord`)가 문자열 `please`일 때 함수는 문자열 `OFF`를 반환해야 합니다. 그 이외의 모든 입력값에 대해서는 `ON`을 반환해야 합니다.

여러분의 함수가 과제 지시대로 잘 작동한다면, _HACK_ 버튼을 클릭하여 작업을 검증받으세요.

## 유용한 링크

* [JavaScript.info 함수 기초 가이드](https://ko.javascript.info/function-basics)
* [함수 선언문](https://ko.javascript.info/function-basics#function-declaration)
* [함수에서 값 반환하기](https://ko.javascript.info/function-basics#returning-a-value)
* [MDN 함수 안내서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)

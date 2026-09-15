# 더 복잡한 조건 논리(Boolean Logic)

일부 조건 비교는 다른 것보다 더 복잡할 수 있습니다. 코드를 어떻게 분기할지 결정하기 위해 여러 조건을 함께 평가해야 할 때도 있습니다. 이를 위해서는 불리언(boolean) AND (`&&`) 와 OR (`||`) 연산자를 사용해야 합니다. 이것들을 때로는 **논리 연산자(logical operators)**라고도 부릅니다.

[JavaScript.info에서 이러한 연산자들에 대해 더 자세히 알아보세요](https://ko.javascript.info/logical-operators).

아래는 더 복잡한 비교 조건이 포함된 if 문의 간단한 예시입니다.

```js
const name = 'Cedric';
const isRobot = true;
const awesomenessLevel = 1000;

if (
  name === 'Cedric' &&
  isRobot &&
  awesomenessLevel > 10
) {
  console.log('Yup, that is our Cedric!');
}
```

## 스프링클러 작동시키기

스프링클러 시스템을 고치려면 코드 폴더에 `shouldWater.js`라는 이름의 파일을 만드세요. 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

이번에는 스크립트에서 두 개의 인수를 고려해야 합니다 - 아래 코드를 시작 코드로 활용해 보세요:

```js
const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// 여러분의 if 문을 아래에 작성하세요...
if (false) {
  console.log('WATER');
}
```

위 코드는 다음과 같이 실행하여 테스트해 볼 수 있습니다:

```bash
node shouldWater.js 1 20
```

위 명령어는 아무것도 출력하지 않아야 합니다. 건조 수치는 10보다 크지만, 생명 상태가 0이 아니라 1이기 때문입니다.

반면, 다음 명령어는 `WATER`를 출력해야 합니다. 첫 번째 인수가 `0`이고 두 번째 인수가 `10`보다 크기 때문입니다:

```bash
node shouldWater.js 0 11
```

스크립트가 과제 설명대로 올바르게 동작한다면, _HACK_ 버튼을 클릭하여 여러분의 작업을 검증받으세요!

## 유용한 리소스

* [MDN 조건문 소개](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - 논리 연산자](https://ko.javascript.info/logical-operators)

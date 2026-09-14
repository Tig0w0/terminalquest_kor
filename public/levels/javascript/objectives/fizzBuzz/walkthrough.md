# 흔히 쓰이는 문제

이 문제는 면접 문제로 널리 쓰이는 [Fizz Buzz 알고리즘](https://learnjswith.me/javascript-fizzbuzz/)의 변형입니다. 실용적인 알고리즘은 아니지만 조건문을 익히고 새로운 연산자를 배우기에 좋습니다.

## 나누어떨어지는지 확인하기: 나머지 연산자

JavaScript의 나머지 연산자 `%`는 두 숫자를 나눈 나머지를 반환합니다.

```js
12 % 5 === 2;
4 % 2 === 0;
12 % 3 === 0;
```

어떤 수가 다른 수로 나누어떨어지면 `%`의 결과는 `0`입니다.

## 시작 코드

다음 위치에 JavaScript 파일을 만드세요.

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>/fizzBuzz.js`

```js
const numberInput = Number(process.argv[2]);
let output = '';

if (false) {
  output += 'Java';
}

if (false) {
  output += 'Script';
}

if (false) {
  output = String(numberInput);
}

console.log(output);
```

다양한 값으로 테스트하세요.

```bash
node fizzBuzz.js 15
```

코드가 올바르게 작동하면 *해킹* 버튼을 누르세요!

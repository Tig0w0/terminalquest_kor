# 논쟁(Arguments)에서 이기는 법

이 과제의 목표는 [명령줄 인수(command line arguments)](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)의 개념에 익숙해지는 것입니다. 명령줄 인수란 코드가 실행될 때 맥락(context)을 제공하기 위해 JavaScript 코드에 외부에서 전달되는 데이터를 말합니다.

지금까지 여러분은 테스트 스크립트를 실행할 때 다음과 같은 형태의 명령어를 사용해 왔습니다.

```bash
node someProgram.js
```

명령어를 입력하면 여러분의 코드가 실행되고 작성한 명령어들이 수행됩니다.

하지만 직접 작성한 프로그램에 초기 데이터를 전달해야 할 때 유용한 경우가 많습니다. 우리는 이 초기 데이터를 **인수(arguments)**라고 부릅니다. 인수를 포함하여 스크립트를 실행하려면, 코드 파일 이름 뒤에 공백으로 구분하여 텍스트를 추가로 입력하면 됩니다. 다음은 3개의 인수를 전달하여 스크립트를 실행하는 예시입니다:

```bash
node someProgram.js "argument one" "another argument" allOneWordNoQuotes
```

이렇게 전달된 인수들은 코드 내에서 [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)라는 특수한 리스트(배열)를 통해 접근할 수 있습니다.

이번 과제에서는 명령줄 인수를 다루는 프로그램을 작성해야 합니다. 처음에는 조금 까다로울 수 있으므로, 시작 코드로 활용할 수 있는 예제 코드를 제공해 드립니다:

```js
// 아래 코드 줄은 스크립트 이름 뒤에 전달된 첫 번째 인수의 값을 읽어옵니다.
const argumentValue = process.argv[2];

// 이 코드 줄은 가져온 인수를 숫자형(numeric value)으로 변환합니다.
const numberValue = Number(argumentValue);

// 이 코드 줄은 입력된 숫자를 2로 나누고, 그 결과를 "result"라는 이름의 변수에 저장합니다.
const result = numberValue / 2;

// 여러분은 바로 아래의 코드를 완성해야 합니다! 42라는 숫자를 직접(hard coding) 적지 않고
// 계산된 결과(result)를 터미널 창에 출력하려면 어떻게 해야 할까요?
console.log(42);
```

위 코드를 여러분의 코드 폴더 내에 있는 `divideByTwo.js` 파일에 추가하세요. 참고로, 여러분의 코드 폴더 위치는 다음과 같습니다:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

코드를 추가했다면, 프로그램의 마지막 줄을 수정하여 입력받은 숫자를 2로 나눈 결과가 제대로 출력되도록 만들어야 합니다. 작성한 코드를 테스트해 보려면 터미널에서 아래와 같이 실행해 보세요.

```bash
node divideByTwo.js 400
```

코드가 정확하다면, 실행 후 `200`이라는 숫자가 출력되어야 합니다. 기억하세요, 이 기능이 올바르게 작동하려면 위에 제공된 시작 코드를 직접 수정하셔야 합니다!

스크립트가 정상적으로 작동한다면, *HACK* 버튼을 클릭하세요.

## 유용한 리소스(영문)

* [Node.js Command Line Arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
* [Reference docs for process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)

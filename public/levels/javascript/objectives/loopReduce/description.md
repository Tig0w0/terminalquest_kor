# 리듀스 맛보기 (A Bit Reductive)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>freightMass.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>문자열 배열을 유일한 인수로 받는 <code>calculateMass</code>라는 이름의 함수를 생성하세요.</li>
  <li>여러분의 함수는 반드시 <b>숫자를 반환</b>해야 합니다. 반환되는 값은 입력 배열에 있는 모든 문자열의 길이를 구하여 그 숫자들을 모두 더한 결과여야 합니다.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
</div>

**Infinite Loop** 호의 안전한 화물칸 중 한 곳에서, 여러분은 TwilioQuest 프로그램의 전기 엔지니어에게 접근하기 위해 비활성화해야 하는 보안 노드 중 하나를 발견합니다.

이 노드는 현재 화물선의 화물을 스캔하여 전체 질량(mass)을 계산하도록 설계된 JavaScript 함수가 오작동을 일으켜 잠겨 있는 상태입니다.

이 노드를 해킹하고 **Infinite Loop**의 마스터 암호를 찾는 데 필요한 잃어버린 인덱스를 되찾으려면 이 함수를 수리해야 합니다.

## 질량 계산 문제 수정하기 (Fixing the mass calculation)

코드 폴더에 `freightMass.js`라는 이름의 파일을 만드세요. 이 파일 안에 `calculateMass`라는 이름의 [JavaScript 함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하세요.

이 함수는 단 하나의 인수, 즉 문자열 배열을 받아야 합니다. 여러분의 `calculateMass` 함수는 [배열의 "reduce"](https://ko.javascript.info/array-methods#reduce-reduceright) 함수를 사용하여 입력 배열의 모든 문자열에 대해 그 길이를 알아내고, **배열 내 모든 문자열 길이의 총합**을 지속적으로 누적해야 합니다. 계산이 끝나면 여러분의 함수는 화물의 질량을 나타내는 이 총 길이를 반환(return)해야 합니다.

여러분의 함수는 다음과 같이 호출될 수 있으며, 예시에 설명된 결과를 반환해야 합니다:

```js
const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);
// mass는 이제 10이 됩니다. (3 + 3 + 4)
```

"도움말(Help)" 탭에서 시작 코드로 활용할 수 있는 예시를 찾을 수 있습니다.

코드가 준비되면 _HACK_ 버튼을 클릭하여 이 보안 노드를 해킹하고, 전기 엔지니어를 구출하는 데 필요한 비밀번호 인덱스를 받으세요!

# 변화의 순간 (A Transformational Moment)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>freightTransformer.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>문자열 배열을 유일한 인수로 받는 <code>transform</code>이라는 이름의 함수를 생성하세요.</li>
  <li>여러분의 함수는 반드시 <b>문자열의 배열을 반환</b>해야 합니다. 반환되는 배열은 입력 배열의 모든 아이템을 포함하되, 각 항목들이 전부 대문자(ALL CAPS)로 변환된 상태여야 합니다.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
</div>

**Infinite Loop** 호의 안전한 화물칸 중 한 곳에서, 여러분은 TwilioQuest 프로그램의 전기 엔지니어에게 접근하기 위해 비활성화해야 하는 보안 노드 중 하나를 발견합니다.

이 노드는 현재 화물선의 화물을 스캔하고 효율적인 포장을 위해 내용물을 정규화(normalize)하도록 만들어진 JavaScript 함수가 오작동을 일으켜 잠겨 있는 상태입니다.

이 노드를 해킹하고 **Infinite Loop**의 마스터 암호를 찾는 데 필요한 잃어버린 인덱스를 되찾으려면 이 함수를 수리해야 합니다.

## 세상을 변화시키세요 - 아니면 적어도 배열이라도요

코드 폴더에 `freightTransformer.js`라는 이름의 파일을 만드세요. 이 파일 안에 `transform`이라는 이름의 [JavaScript 함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하세요.

이 함수는 변환할 문자열들의 배열, 단 하나의 인수만을 받아야 합니다. 여러분의 `transform` 함수는 [배열의 "map"](https://ko.javascript.info/array-methods#map) 함수를 사용하여 입력 배열의 모든 문자열을 가져와 모두 대문자(ALL CAPS)로 변환해야 합니다. 그런 다음 여러분의 함수는 반드시 이 **변환된 배열을 반환(return)**해야 합니다.

여러분의 함수는 다음과 같이 호출될 수 있으며, 예시에 설명된 결과를 반환해야 합니다:

```js
const cargo = ["apples", "ray guns", "oranges"];

const transformedCargo = transform(cargo);
// transformedCargo는 이제 ['APPLES', 'RAY GUNS', 'ORANGES']가 됩니다.
```

"도움말(Help)" 탭에서 시작 코드로 활용할 수 있는 예시를 찾을 수 있습니다.

코드가 준비되면 _HACK_ 버튼을 클릭하여 이 보안 노드를 해킹하고, 전기 엔지니어를 구출하는 데 필요한 비밀번호 인덱스를 받으세요!

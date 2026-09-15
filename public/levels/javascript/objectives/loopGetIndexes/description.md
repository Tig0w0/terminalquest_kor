# 지속적인 경계 (Constant Vigilance)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>freightScanner2.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>문자열 배열을 인수로 받는 <code>scan</code>이라는 이름의 함수를 생성하세요.</li>
  <li>여러분의 함수는 반드시 <b>숫자들의 배열을 반환</b>해야 합니다. 이 반환된 배열 안에는 입력 배열에서 문자열 <code>contraband</code>가 나타난 모든 인덱스 위치가 포함되어야 합니다.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
</div>

**Infinite Loop** 호의 안전한 화물칸 중 한 곳에서, 여러분은 TwilioQuest 프로그램의 전기 엔지니어에게 접근하기 위해 비활성화해야 하는 보안 노드 중 하나를 발견합니다.

이 노드는 현재 화물선의 수상한 화물을 스캔하도록 되어 있는 JavaScript 함수가 오작동을 일으켜 잠겨 있는 상태입니다.

이 노드를 해킹하고 **Infinite Loop**의 마스터 암호를 찾는 데 필요한 잃어버린 인덱스를 되찾으려면 이 함수를 수리해야 합니다.

## 스캐너 구현하기

코드 폴더에 `freightScanner2.js`라는 이름의 파일을 만드세요. 이 파일 안에 `scan`이라는 이름의 [JavaScript 함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하세요.

이 함수는 단 하나의 인수, 즉 문자열 배열을 받아야 합니다. 여러분의 `scan` 함수는 이 배열 안의 모든 문자열을 반복(loop)하면서, [조건 논리(boolean logic)](https://ko.javascript.info/ifelse)를 사용하여 각각의 문자열을 검사해야 합니다.

만약 입력 배열 안의 문자열이 `contraband`(밀수품)이라는 값과 같다면, 해당 아이템의 [인덱스(index)](https://ko.javascript.info/array#declaration)를 **출력용 배열(output array)**에 추가하세요. 전체 입력 배열에 대한 반복문 스캔을 마치고 나면, 이 **출력용 배열을 반환(return)**하세요. 출력용 배열은 배열 안에서 의심스러운 아이템(밀수품)이 위치했던 모든 인덱스 번호를 담고 있어야 합니다.

예를 들어, 다음과 같은 입력 배열이 주어졌을 때:

```js
['contraband', 'apples', 'cats', 'contraband', 'contraband']
```

여러분의 함수는 다음 배열을 반환해야 합니다:

```js
[0, 3, 4]
```

이 목록은 입력 배열 안에서 `contraband` 문자열이 위치한 자리(인덱스 번호)를 담고 있습니다.

"도움말(Help)" 탭에서 시작 코드로 활용할 수 있는 예시를 찾을 수 있습니다.

코드가 준비되면 _HACK_ 버튼을 클릭하여 보안 노드를 해킹하고, 전기 엔지니어를 구출하는 데 필요한 비밀번호 인덱스를 획득하세요!

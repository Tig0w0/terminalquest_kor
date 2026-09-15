# 아이템들을 순서대로 정렬하세요

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>getFirstAmountSorted.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>과제 설명대로 동작하는 <code>getFirstAmountSorted</code>라는 이름의 함수를 만드세요.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
</div>

**Infinite Loop** 호에 탑승한 후, 당신은 연구소의 폭발 사고로 인해 화물선 자체의 여러 시스템(눈앞의 이 장벽을 포함해)도 오작동을 일으켰음을 발견합니다. 선내의 다른 구역으로 진입하려면, 이 화물선의 배열 처리 코드 중 일부를 고쳐야 합니다.

당신은 이 장벽을 닫혀 있게 만드는 코드 조각을 발견했습니다. 앞서 마주쳤던 장벽들과 마찬가지로, 이번에도 **배열 처리(array processing)**를 담당하는 JavaScript 함수의 오류를 수정해야 합니다.

## 자르기(Slicing)와 정렬하기(Sorting)

코드 폴더에 `getFirstAmountSorted.js`라는 이름의 파일을 만드세요. 그 파일 안에 `getFirstAmountSorted`라는 이름의 함수를 생성하세요. 이 함수는 **두 개의 인수(arguments)**를 받습니다. 첫 번째 인수는 배열(array)이어야 하고, 두 번째 인수는 숫자(number)여야 합니다. 여러분의 함수는 다음과 같이 동작해야 합니다:

* 먼저 입력받은 배열(첫 번째 인수)을 알파벳 순서로 정렬합니다.
* 배열이 정렬되고 나면, 정렬된 배열의 처음부터 `N`개의 요소를 포함하는 **새로운 배열을 반환(return)**해야 합니다. 여기서 `N`은 함수에 전달된 두 번째 인수의 값입니다.

함수 사용 예시:

```js
const outputArray = getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2);
// outputArray는 이제 ['ant', 'bird']가 됩니다.
```

다음은 추가적인 입력과 출력의 예시입니다:

| 배열(array)                                   | 숫자(number) | 반환값(return)                              |
| ------------------------------------------- | ------ | ------------------------------------------- |
| ['third', 'second', 'first']                | 2      | ['first', 'second' ]                        |
| ['golden', 'terrier']                       | 1      | ['golden']                                  |
| ['cheerios', 'apple jacks', 'lucky charms'] | 3      | ['apple jacks', 'cheerios', 'lucky charms'] |
| ['golden', 'terrier', 'boxer']              | 0      | [ ]                                          |

시작 코드로 사용할 수 있는 예제가 **도움말(Help) 탭에 준비되어 있습니다**. 여러분의 함수가 위 설명대로 동작한다면, _HACK_ 버튼을 클릭하세요.

# 로컬 함수

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>`swapStrings`라는 함수를 만드세요.</li>
  <li>이 함수는 문자열 인수 3개를 받습니다.</li>
  <li>`replaceAll` 함수를 사용하여 "원본" 문자열에 있는 "대상" 문자열을 모두 "대체" 문자열로 바꾸세요.</li>
  <li>완성된 문자열을 반환하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

<i>
오퍼레이터, API 비전술 아카데미의 연례 기숙사 대항전 첫 도전에 온 것을 환영합니다. 러브레이스 탑을 오르며 API 지식을 응용하는 능력을 시험받게 됩니다. 첫 도전에서는 라이브러리가 함수와 객체로 제공하는 로컬 API를 사용해 글을 다루어 봅니다. 러브레이스 기숙사에 잘 어울리는 과제이지요. `String.replaceAll` 메서드를 사용하여 특정 문자열을 전부 다른 문자열로 바꾸세요.
</i>

예를 들어 다음 코드는

```js
const myString =
  "I read in a book that the answer to the universe is: one two one two one two.";
const swappedString = myString.replaceAll("two", "zero");

console.log(swappedString);
```

콘솔에 `I read in a book that the answer to the universe is: one zero one zero one zero.`를 출력합니다.

로컬 함수 API는 문장 하나뿐 아니라 책 한 권 전체도 바꿀 수 있습니다. 대항전 선수가 러브레이스 기숙사의 책에서 모든 `" "`를 `""`로 바꾼다면 얼마나 큰 혼란이 일어날까요? 이처럼 간단한 API만으로도 중요한 문서를 손쉽게 망가뜨리거나 복구할 수 있습니다!

문자열 인수 3개를 받는 `swapStrings` 함수를 만드세요.

- `sourceString`
- `targetWord`
- `replacementWord`

`sourceString`에 있는 `targetWord`를 모두 `replacementWord`로 바꾸고 결과를 반환하세요.

완료하면 _해킹_ 버튼을 누르세요!

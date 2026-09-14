# Fetch 요청

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>`getMagicalPhrase`라는 `async` 함수를 만드세요.</li>
  <li>`fetch`를 사용해 `magic` 엔드포인트에 마법 문구를 요청하세요.</li>
  <li>텍스트를 파싱하세요.</li>
  <li>마법 문구를 복사해 입력란에 붙여 넣으세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

<i>
러브레이스 탑의 세 번째 도전에 온 것을 환영합니다! 이번에는 `await`의 힘을 시험하기 위해 마법 문구를 `fetch`해야 합니다. 이 과정은 러브레이스 탑의 도전을 마치고 예지 주문을 만들 때 도움이 될 것입니다.
</i>

API에서 데이터를 가져오는 예를 먼저 살펴봅시다.

```js
const response = await fetch("some_url");
const text = await response.text();
console.log(text);
```

위 예제는 `fetch`로 `some_url`에 데이터를 요청하고, 가져오기가 끝날 때까지 `await`로 코드를 "일시 정지"합니다. 그런 다음 응답에서 `text`를 파싱해 콘솔에 출력합니다.

`fetch`와 `await`를 사용해 `magic` 엔드포인트에 마법 문구를 요청하는 `getMagicalPhrase` 함수를 만드세요. 받은 문구를 복사해 입력란에 붙여 넣으세요. 문구를 보려면 `console.log`를 사용해야 할 수도 있습니다!

완료하면 _해킹_ 버튼을 누르세요!

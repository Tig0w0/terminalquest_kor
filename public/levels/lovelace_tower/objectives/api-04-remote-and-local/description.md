# 원격과 로컬

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>`getFilteredAuthors`라는 `async` 함수를 만드세요.</li>
  <li>이 함수는 숫자를 받습니다.</li>
  <li>`fetch`로 엔드포인트에서 책 데이터를 가져와 파싱하세요.</li>
  <li>`pageCount`보다 페이지 수가 많은 책만 필터링하세요.</li>
  <li>책 배열을 저자 이름 배열로 변환하세요.</li>
  <li>결과를 반환하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

<i>
대항전 선수여, 러브레이스 탑의 네 번째 도전에 온 것을 환영합니다. 이번에는 새로 익힌 `async`와 `await`를 활용해 클라우드의 원격 도서관에 보관된 특별한 책들의 저자를 밝혀내야 합니다. 이 이름들은 강력한 주문과 관련되어 있으며, 주문을 외우면 남은 기숙사 대항전을 진행하는 데 필요한 `예지 주문`을 얻게 됩니다. 기숙사 대항전이 주는 단서는 하나뿐입니다. 이 저자들은 저마다 일정한 수보다 많은 페이지를 썼습니다. 정확한 이름을 찾아 소리 내어 읽으면 예지 주문이 만들어집니다.
</i>

앞선 과제에서는 API(Application Programming Interface)의 데이터를 곧바로 반환했습니다. 보통은 응답을 조금 더 가공해야 하므로 이번에도 `fetch`와 `await`로 데이터를 요청한 뒤 처리해 봅시다.

API에서 데이터를 가져오고 JSON(JavaScript Object Notation) 응답을 파싱하는 예입니다.

```js
const response = await fetch("some_url");
const jsonData = await response.json();
console.log(jsonData);
```

위 코드는 `some_url`에 데이터를 요청하고 응답이 올 때까지 `await`로 기다린 다음, `response.json`으로 JSON을 파싱해 콘솔에 출력합니다.

엔드포인트의 데이터를 요청하고 파싱하는 `getFilteredAuthors` 함수를 만드세요. `pageCount` 입력값보다 **더 많은** 페이지를 쓴 저자만 필터링하고, 저자 이름을 배열로 반환해야 합니다.

완료하면 _해킹_ 버튼을 누르세요!

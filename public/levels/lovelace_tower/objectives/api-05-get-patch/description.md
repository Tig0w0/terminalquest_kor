# GET과 PATCH

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>`getAndPatchCorruptedInscription`이라는 async 함수를 만드세요.</li>
  <li>이 함수는 숫자를 받습니다.</li>
  <li>`divination` 엔드포인트에서 손상된 비문을 가져와 파싱하세요.</li>
  <li>도서관에 흩어진 두루마리에서 비문 조각을 찾으세요.</li>
  <li>복구한 비문과 `guid`를 `divination` 엔드포인트로 보내세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

<i>
러브레이스 탑의 마지막 도전에 온 것을 환영합니다.<br><br>
기숙사 대항전은 이 조각상의 표면에 새겨진 러브레이스 기숙사의 예지 주문을 읽을 자격을 여러분에게 부여합니다. 이 비문은 러브레이스 탑에서 얻은 예지 주문의 핵심이며, 적힌 문구 하나하나가 주문을 작동시키는 데 꼭 필요합니다…
</i>

러브레이스 비밀 도서관 안에서 무슨 일이 벌어진 모양입니다. 책은 선반에서 뜯겨 나와 방 안에 흩어져 있고 예지 비문도 손상되었습니다! 지금까지 배운 내용을 모두 활용해 러브레이스 비문을 복구하고 예지 주문이 다시 작동하게 합시다!<br><br>
먼저 손상된 비문을 `fetch`하여 어느 부분을 고쳐야 하는지 확인해야 합니다. 그런 다음 도서관에 흩어진 두루마리에서 조각을 모아 QuestIDE에서 하나의 문자열로 합치세요. 마지막으로 복구한 비문을 `patch` 요청으로 `divination` 엔드포인트에 보내야 합니다.

`patch` 요청을 보내는 예입니다.

```js
const response = await fetch("{{DIVINATION_ENDPOINT}}", {
  method: "PATCH",
  body: JSON.stringify({
    guid: "{{GUID_ARGUMENT}}",
    data: {
      inscription: "{{REPAIRED_INSCRIPTION}}",
    },
  }),
});

// 필수 코드는 아니지만 오류를 추적할 때 도움이 됩니다.
const jsonData = await response.json();
console.log(jsonData);
```

`getAndPatchCorruptedInscription` 함수를 만드세요. `divination` 엔드포인트에서 손상된 비문을 가져오고, 도서관의 조각을 찾아 빠진 부분을 QuestIDE에서 합친 다음, 복구한 비문과 `guid`를 `patch` 요청으로 같은 엔드포인트에 보내세요. 받은 응답을 `console.log`로 출력하면 도움이 될 수 있습니다!

완료하면 _해킹_ 버튼을 누르세요!

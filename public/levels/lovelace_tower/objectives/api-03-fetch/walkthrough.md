# fetch란 무엇인가요?

때로는 다른 컴퓨터에서 데이터를 가져오거나 작업을 수행하고 싶을 때가 있습니다. 웹사이트 방문이 대표적인 예입니다. 브라우저에 웹사이트 URL을 입력하면 브라우저는 그 웹사이트를 실행하는 "서버"라는 컴퓨터에 HTTP 요청을 보냅니다. HTTP 요청의 설정은 서버가 무엇을 해야 하는지 알려 줍니다. 보통 브라우저로 웹사이트를 방문할 때는 사이트를 "가져오라"는 HTTP `GET` 요청을 보냅니다.

JavaScript는 HTTP 요청을 보내는 `fetch` 메서드를 제공합니다. `fetch`로 HTTP 요청을 설정하고 전송하면 코드에서 웹사이트 내용도 가져올 수 있습니다. 브라우저와 마찬가지로 요청을 보낼 때 [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)을 사용합니다.

## fetch 사용하기

`fetch` 함수는 요청을 보낼 URL과 설정 객체, 두 인수를 받습니다. 여기서는 여러 [설정 항목](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters) 가운데 `method` 등 몇 가지만 살펴봅니다. `method`는 응답을 크게 바꾸는 중요한 항목입니다. [HTTP 메서드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) 중 하나를 지정할 수 있습니다.

## HTTP 메서드란 무엇인가요?

HTTP 메서드는 보낼 수 있는 요청의 종류를 나타냅니다. 가장 많이 쓰이는 것은 `GET`, `POST`, `PATCH`, `PUT`, `DELETE`입니다.

- `GET`은 다른 기기에 데이터나 정보를 요청합니다.
- `POST`는 다른 기기에 데이터를 보냅니다.
- `PUT`은 이미 존재하는 대상을 요청에 담긴 내용으로 완전히 교체하도록 요청합니다.
- `PATCH`는 이미 존재하는 대상을 요청에 담긴 지시에 따라 일부 갱신하도록 요청합니다.
- `DELETE`는 대상을 삭제하도록 요청합니다.

어떤 메서드는 요청과 함께 추가 데이터를 보내야 하고, 어떤 메서드는 그럴 필요가 없습니다. 모든 요청에는 응답이 오며, `GET`과 마찬가지로 데이터가 포함될 수도 있습니다. 직접 시험하며 익혀 보세요!

```js
const response = await fetch("some_url", {
  method: "GET",
});

// const textData = await response.text();
// const jsonData = await response.json();

console.log(response);
```

`fetch`는 비동기 함수이므로 `await`로 기다리거나 Promise 체이닝으로 콜백을 전달해야 합니다. 위 예제는 가짜 URL에 요청하지만 유효한 URL이라면 무엇이든 사용할 수 있습니다. 두 번째 인수인 객체의 [속성](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters:~:text=A%20Request%20object.-,options,-Optional)이 요청의 각 설정이 됩니다. 응답 데이터를 텍스트와 JSON으로 파싱하는 두 방법도 주석에 나와 있습니다. 데이터 종류에 맞는 방법을 사용하세요.

```js
const response = await fetch("some_url", {
  method: "POST",
  body: "Hello World",
});

console.log(response);
```

이번에는 `POST` 요청 설정에 `body` 속성을 추가했습니다. `POST`는 보통 데이터를 함께 보내야 하며, 이 예제는 서버에 `Hello World` 문자열을 보냅니다.

## 마법 문구 가져오기

마법 문구를 얻는 방법도 앞의 예제와 비슷합니다. URL은 `https://twilio.com/quest/magic`이고 문구를 "가져오려는" 것이므로 `GET` 메서드를 사용합니다.

```js
async function getMagicalPhrase() {
  const response = await fetch("https://twilio.com/quest/magic", {
    method: "GET",
  });
  const magicalPhrase = await response.text();

  console.log(magicalPhrase);
}
```

이 코드를 실행하면 입력란에 넣을 마법 문구를 확인할 수 있습니다!

## 도움말

- [MDN URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN HTTP 메서드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN Fetch 설정](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters:~:text=A%20Request%20object.-,options,-Optional)

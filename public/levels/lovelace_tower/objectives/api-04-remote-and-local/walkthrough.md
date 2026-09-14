# API란 무엇인가요?

[API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#what_are_apis)(Application Programming Interface)는 다른 컴퓨터 프로그램과 상호작용하는 방법을 제공합니다. API는 각기 다른 서비스를 나타내는 `endpoint`를 공개하며, 각 엔드포인트에는 고유한 URL(Uniform Resource Locator)과 [메서드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)로 접근할 수 있습니다.

## JSON이란 무엇인가요?

[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)(JavaScript Object Notation)은 데이터를 표현하고 교환할 때 널리 쓰는 형식입니다. 정보를 응답으로 제공하는 엔드포인트에 요청할 때 자주 사용됩니다. `fetch`로 JSON을 받았다면 사용하기 전에 반드시 [파싱](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#static_methods), 즉 컴퓨터가 분석할 수 있는 형태로 변환해야 합니다.

## 책 가져오기와 필터링하기

엔드포인트는 `https://twilio.com/quest/magic/divination`입니다. 정보를 보내 달라고 **요청**하므로 `GET` 메서드를 사용합니다.

```js
const response = await fetch("https://twilio.com/quest/magic/divination", {
  method: "GET",
});
const books = await response.json();
```

이제 책 데이터를 요청해 JSON을 파싱하고 변수에 저장했습니다. `console.log(books);`를 실행하면 다음과 비슷한 내용이 보입니다.

```json
[
  {
    "id": 1,
    "title": "Application Programming Interface Documentation: What Do Software Developers Want?",
    "yearPublished": 2017,
    "link": "https://sci-hub.ru/https://journals.sagepub.com/doi/abs/10.1177/0047281617721853",
    "author": {
      "name": "Michael Meng"
    },
    "metadata": {
      "pageCount": 36
    }
  },
  {
    "id": 2,
    "title": "Improving API Usability",
    "yearPublished": 2016,
    "link": "https://sci-hub.ru/https://dl.acm.org/doi/fullHtml/10.1145/2896587",
    "author": {
      "name": "Brad A. Myers"
    },
    "metadata": {
      "pageCount": 8
    }
  }
]
```

과제에서는 저자가 쓴 페이지 수가 `pageCount` 인수보다 많은 책만 골라 저자 이름 배열로 반환해야 합니다. 먼저 페이지 수를 기준으로 책을 필터링합니다.

```js
const response = await fetch("https://twilio.com/quest/magic/divination", {
  method: "GET",
});
const books = await response.json();
const filteredBooks = books.filter((book) => {
  return book.metadata.pageCount > pageCount;
});
```

`filter` 메서드는 모든 `books`를 확인하여 `pageCount`보다 페이지가 많지 않은 책을 제외하고 결과를 `filteredBooks`에 저장합니다. 이제 각 책을 저자 이름으로 바꿉시다.

```js
const response = await fetch("https://twilio.com/quest/magic/divination", {
  method: "GET",
});
const books = await response.json();
const filteredBooks = books.filter((book) => {
  return book.metadata.pageCount > pageCount;
});
const authorNames = filteredBooks.map((book) => {
  return book.author.name;
});
```

`map` 함수는 배열의 각 요소를 하나씩 바꿉니다. 여기서는 각 책의 `author.name`을 새 값으로 사용합니다. `console.log(authorNames)`를 실행하면 다음과 비슷한 결과가 나옵니다.

```json
["name1", "name2"]
```

이제 저자 이름을 반환하기만 하면 됩니다. 전체 코드는 다음과 같습니다.

```js
async function getFilteredAuthors(pageCount) {
  const response = await fetch("https://twilio.com/quest/magic/divination", {
    method: "GET",
  });
  const books = await response.json();
  const filteredBooks = books.filter((book) => {
    return book.metadata.pageCount > pageCount;
  });
  const authorNames = filteredBooks.map((book) => {
    return book.author.name;
  });

  return authorNames;
}
```

## 도움말

- [MDN HTTP 메서드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [MDN Web API 소개](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#what_are_apis)
- [MDN Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

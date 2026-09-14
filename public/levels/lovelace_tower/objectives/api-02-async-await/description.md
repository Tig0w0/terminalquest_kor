# Async와 Await

<div class="aside">
<h3>요구 사항</h3>
<ul>
  <li>`findLastFileInDir`라는 `async` 함수를 만드세요.</li>
  <li>이 함수는 디렉터리를 가리키는 문자열을 받습니다.</li>
  <li>`await`와 `readdir`를 사용하여 주어진 디렉터리의 모든 항목을 읽으세요.</li>
  <li>디렉터리의 마지막 항목을 반환하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul>
</div>

<i>
대항전 선수여, 러브레이스 탑의 두 번째 도전에 온 것을 환영합니다. 이번에는 `asynchronous` 함수가 지닌 마법의 힘을 이해해야 합니다. 이런 비동기성 때문에 API의 힘을 다루는 사람은 함수가 값을 돌려줄 때까지 `await`해야 합니다. 코드가 즉시 실행되는 것을 잠시 미루면 선형적인 시간이라는 개념마저 뛰어넘을 수 있습니다.
</i>

Web API를 다룰 때 알아야 할 중요한 도구가 `async`(asynchronous, 비동기의 줄임말)와 `await`입니다. 완료하는 데 시간이 걸릴 수 있는 작업에 이 도구들을 사용합니다. `readdir`(read directory의 줄임말) 메서드로 디렉터리의 모든 항목을 비동기적으로 읽고 마지막 항목을 반환해 봅시다.

예를 들어 디렉터리가 다음과 같다면

```plaintext
adventures/
└── places/
    ├── javascript-test-labs.txt
    ├── pythonic-temple.txt
    ├── forest-of-open-source.txt
    ├── tower-of-inifinite-knowledge.txt
    └── api-academy.txt
```

`api-academy.txt` 파일을 반환해야 합니다.

`await`와 `readdir`를 사용해 `dirPath` 디렉터리의 모든 항목을 가져오고 마지막 항목을 반환하는 `findLastFileInDir` 함수를 만드세요.

완료하면 _해킹_ 버튼을 누르세요!

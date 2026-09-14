# 배열 평탄화하기

<div class="aside"><h3>요구 사항</h3><ul>
  <li>`flattenArray` 함수를 만드세요.</li>
  <li>숫자, 문자열, 객체 또는 다른 배열을 포함할 수 있는 배열을 받습니다.</li>
  <li>모든 중첩 배열의 요소를 꺼내 하나의 새 배열로 반환하세요.</li>
  <li>입력이 빈 배열이면 `Pure Ducktypium!`을 반환하세요.</li>
  <li>완료하면 <em>해킹</em>을 누르세요.</li>
</ul></div>

이 단말기는 어둠의 덕타이피움에서 불순물을 제거합니다. 깊이에 관계없이 하위 배열의 모든 요소를 최상위로 끌어올리는 `flattenArray` 함수를 만드세요.

## 예제

- `[]` → `Pure Ducktypium!`
- `[1, "two", 3, "four"]` → `[1, "two", 3, "four"]`
- `[1, 3, 3, 7, ["legacy wuz here"]]` → `[1, 3, 3, 7, "legacy wuz here"]`
- `["python", ["javascript", ["api", ["messaging"]]]]` → `["python", "javascript", "api", "messaging"]`

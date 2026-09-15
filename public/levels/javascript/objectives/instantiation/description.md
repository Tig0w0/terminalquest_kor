# 말 그대로 객체 (Literally an Object)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>construction.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>단 하나의 문자열 인수를 받는 <code>construct</code>라는 이름의 함수를 생성하세요.</li>
  <li>여러분의 함수는 반드시 아래 설명된 객체를 반환해야 합니다.</li>
</ul>
</div>

연구소 북쪽 방의 중앙에는 이상하게 생긴 장치가 하나 놓여 있습니다. 이 방에 처음 들어왔을 때는 그 목적이 당장 명확하지 않았죠. 여러분 앞의 콘솔을 살펴보고 나서야 이것이 **물질 구체화기(matter instantiator)**의 제어판임을 추론해 냅니다. 방 한가운데 있는 저 커다란 챔버(방)가 바로 그것일 겁니다!

하지만 콘솔은 연구소 폭발 사고 중에 장치가 손상되었음을 알리는 오류 로그로 가득 차 있습니다. 만약 이 콘솔(그리고 이와 똑같이 생긴 또 다른 콘솔)을 온라인 상태로 되돌릴 수만 있다면, 연구소 중앙의 챔버가 다시 작동할 수 있을 것입니다.

## 객체 리터럴(Object Literal) 생성하기

물질 구체화기는 허공에서 새로운 물건(객체)을 만들어낼 수 있습니다! 이번 과제에서 여러분이 고쳐야 할 JavaScript 함수 역시 [객체 리터럴 표기법(object literal notation)](https://ko.javascript.info/object#literals-and-properties)을 사용하여 객체들을 생산해내는 역할을 맡고 있습니다.

코드 폴더에 `construction.js`라는 이름의 파일을 만드세요. 그 파일 안에 다음과 같은 속성(properties)을 가진 [객체 리터럴(object literal)](https://ko.javascript.info/object#literals-and-properties)을 반환하는 `construct`라는 이름의 함수를 생성하세요:

| 속성명(Property) | 타입(Type) | 값(Value) | 비고(Notes) |
| -------- | ------- | ------- | --------------------------------------------------------------------- |
| name     | string  | 비고 참조    | 이 값은 `construct` 함수의 첫 번째 인수로 전달받은 값이어야 합니다 |
| material | string  | 'human' |                                                                       |
| assemble | boolean | true    |                                                                       |
| duration | number  | 1000    |                                                                       |

위 설명된 작업을 수행할 수 있는 함수를 완성했다면, _HACK_ 버튼을 클릭하세요!

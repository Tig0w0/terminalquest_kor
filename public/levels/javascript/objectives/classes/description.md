# 첫 번째 클래스 (First Class)

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>classes.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>단 하나의 문자열 인수를 받는 <code>Materializer</code>라는 이름의 클래스를 생성하세요.</li>
  <li>이 클래스로 생성된 객체는 반드시 아래 설명된 요건들을 충족해야 합니다.</li>
</ul>
</div>

연구소 북쪽 방의 중앙에는 이상하게 생긴 장치가 하나 놓여 있습니다. 이 방에 처음 들어왔을 때는 그 목적이 당장 명확하지 않았죠. 여러분 앞의 콘솔을 살펴보고 나서야 이것이 **물질 구체화기(matter instantiator)**의 제어판임을 추론해 냅니다. 방 한가운데 있는 저 커다란 챔버(방)가 바로 그것일 겁니다!

하지만 콘솔은 연구소 폭발 사고 중에 장치가 손상되었음을 알리는 오류 로그로 가득 차 있습니다. 만약 이 콘솔(그리고 이와 똑같이 생긴 또 다른 콘솔)을 온라인 상태로 되돌릴 수만 있다면, 연구소 중앙의 챔버가 다시 작동할 수 있을 것입니다.

## 클래스(class)를 이용해 콘솔 고치기

물질 구체화기의 이 부품을 수리하려면, 물질 변환 과정에서 사용되는 구성 객체(configuration object)를 제공하는 JavaScript 코드 조각을 재정의(override)해야 합니다.

코드 폴더에 `classes.js`라는 이름의 파일을 만드세요. 그 파일 안에 `Materializer`라는 이름의 [클래스(class)를 생성](https://ko.javascript.info/class)하세요.

이 클래스는 다음 조건들을 갖춰야 합니다:

- 클래스 생성자(constructor)의 첫 번째 인수로 전달된 값을 가지는 `target`이라는 이름의 속성(property)
- 기본값이 `false`로 설정된 `activated`라는 이름의 속성
- `activated` 속성을 `true`로 설정해주는 `activate`라는 이름의 인스턴스 함수
- `activated` 속성이 `true`일 경우 인스턴스의 `target` 속성값을 반환하는 `materialize`라는 이름의 인스턴스 함수. (단, `activated`가 `true`가 아닐 때는 `undefined`를 반환해야 합니다. 즉 아무것도 반환하지 않아야 합니다.)

위 기준을 모두 충족하는 `Materializer` 클래스를 완성했다면, _HACK_ 버튼을 클릭하여 과제를 검증받으세요!

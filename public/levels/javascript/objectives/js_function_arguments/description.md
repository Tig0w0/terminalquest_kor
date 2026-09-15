# 훌륭한 주장을 펼치는 법

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>politeLasers.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>하나의 문자열 인수(argument)를 받는 <code>getLaserSetting</code>이라는 이름의 함수를 만드세요.</li>
  <li>인수가 "please"일 경우, 문자열 "OFF"를 반환(return)하세요. 그 외의 경우에는 문자열 "ON"을 반환하세요.</li>
  <li>완료되면 <em>HACK</em> 버튼을 클릭하세요.</li>
</ul>
</div>

이 보안 장벽 역시 오작동하고 있습니다. 조금만 살펴보니 그 이유를 알 수 있겠군요. 당신의 옛 동료인 IT 부서의 글렌(Glen)이 이 보안 장벽을 '정중하게 부탁할 때만' 꺼지도록 설정해 놓았습니다.

이 장벽을 통과하려면, [인수(arguments)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions) (또는 "매개변수(parameters)")를 받고 기초적인 [조건 논리(boolean logic)](https://ko.javascript.info/ifelse)를 실행하는 함수를 작성해야 합니다.

함수 인수에 대한 자세한 내용은 "도움말(Help)" 탭을 읽어보세요. 만약 조건 논리를 사용하는 데 도움이 필요하다면, 연구소의 **남쪽 구역(south wing)** 과제들을 먼저 정복하는 것이 좋을 것입니다.

## 장벽 해제하기

이전 장벽과 마찬가지로, 이것 역시 레이저가 `"ON"`인지 `"OFF"`인지를 결정하는 **JavaScript 함수**로 구동됩니다. 장벽을 해제하려면 이 **함수를 덮어써야(override)** 합니다.

코드 폴더에 `politeLasers.js`라는 이름의 파일을 만드세요. 이전 과제에서 했던 것과 똑같이, 이 파일 안에 `getLaserSetting`이라는 이름의 [JavaScript 함수를 생성](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions)하세요.

이번에는 `getLaserSetting` 함수에 전달되는 **첫 번째 인수**에 따라 다른 값을 반환해야 합니다. 만약 첫 번째 인수가 문자열 `please`라면, `OFF`를 반환하세요. 첫 번째 인수가 그 외의 다른 값이라면 `ON`을 반환하세요.

코드가 준비되면 _HACK_ 버튼을 클릭하여 레이저 명령 함수를 덮어쓰세요.

# 단 하나의 조건

<div class="aside">
<h3>할 일 목록(To-Do List)</h3>
<ul>
  <li><code>northBridgeControl.js</code>라는 이름의 파일을 생성하세요.</li>
  <li>명령줄 인수(command line argument)로 전달된 텍스트 문자열을 가져오세요.</li>
  <li>인수 문자열이 <code>EXTEND</code>일 경우, <code>Extending bridge!</code>를 출력하세요.</li>
</ul>
</div>

식물학 연구소는 덕타이피움이 식물에 미치는 영향을 연구하기 위해 여러 개의 온도 조절 구역으로 나뉘어 있습니다. 각 구역은 서식지 간의 교차 오염을 방지하는 에너지 다리로 연결되어 있습니다.

식물학자에게 도달하려면, 바로 이 다리부터 시작하여 다리들을 다시 활성화해야 합니다.

## 다리 확장하기

다리 제어 장치를 살펴보니 활성화 루틴(activation routine)이 고장난 것을 발견했습니다. 다리를 확장하려면 이 루틴을 교체해야 합니다.

코드 폴더에 `northBridgeControl.js`라는 이름의 파일을 만드세요. 이 프로그램은 단일 명령줄 인수를 받아야 합니다. 만약 전달된 인수가 `EXTEND`라면, `console.log`를 사용하여 `Extending bridge!`라는 텍스트를 출력하세요. 만약 `EXTEND` 인수가 전달되지 않았다면 스크립트는 **아무것도 출력하지 않아야 합니다**. 이 스크립트를 실행하는 예시는 다음과 같습니다:

```bash
node northBridgeControl.js EXTEND
```

이러한 스크립트를 작성하는 방법에 대한 자세한 안내는 **도움말(Help) 탭**을 참조하세요. 여러분의 코드가 위 설명대로 잘 동작한다면, _HACK_ 버튼을 클릭하세요!

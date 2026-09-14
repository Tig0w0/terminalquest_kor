# Twilio 계정 설정

이 과제의 목표는 [Twilio 계정을 만들고](https://www.twilio.com/try-twilio?utm_source=twilioquest-3) Twilio와 상호작용하는 데 필요한 계정 인증 정보를 찾는 것입니다. 이 인증 정보는 TwilioQuest가 사용자의 컴퓨터에 로컬로 저장하며, Twilio 관련 코드 과제의 진행을 검증하고 더 빠르게 완료하는 데 사용합니다.

## 계정 인증 정보 찾기

[Twilio 계정에 가입한 뒤](https://www.twilio.com/try-twilio?utm_source=twilioquest-3) [Console 홈 페이지](https://www.twilio.com/console)에서 Twilio 계정 인증 정보를 확인할 수 있습니다.

<center>
<img src="images/basic_training/account-sid-auth-token.png" />
</center>

이 값들이 무엇이고 어디에 쓰이는지 궁금할 수 있습니다.

- **Twilio Account SID:** Twilio 계정을 식별하는 고유 값입니다. 계정에는 [전화번호](https://www.twilio.com/console/phone-numbers/incoming), [발신자 ID](https://www.twilio.com/console/phone-numbers/verified), [Messaging Service](https://www.twilio.com/console/sms/services)를 비롯해 Twilio API 사용과 관련된 다양한 리소스가 들어 있습니다.
- **Twilio Auth Token:** Twilio 계정의 API에 접근하기 위한 비밀번호입니다. 이 값은 조심해서 다루고, [버전 관리 시스템](https://en.wikipedia.org/wiki/Version_control)에 커밋하는 흔한 실수를 저지르지 마세요.

이 두 값을 사용자 이름과 비밀번호처럼 함께 사용하여 [Twilio REST API](https://www.twilio.com/docs)에 접근합니다.

## 계정 보안 참고 사항

실제 서비스에서 사용하는 Twilio 계정의 인증 정보를 TwilioQuest에 입력하는 것은 권장하지 않습니다. 검증 및 자동화 코드가 가능한 한 사용자 작업에 영향을 주지 않도록 설계되어 있지만, 실제 서비스용 API 인증 정보를 TwilioQuest에 제공하면 예상하지 못한 결과가 생길 수 있습니다. TwilioQuest 전용으로 [새 프로젝트를 만드는 방법](https://www.twilio.com/console/projects/create)을 고려하세요.

TwilioQuest에 제공한 API 인증 정보는 검증에 성공한 뒤 **Settings** 메뉴에서 수정할 수 있습니다. 언제든 값을 바꾸거나 지울 수 있습니다. 탐험 중 *O* 키를 누르거나 화면 상단 HUD 바의 **Settings** 아이콘을 클릭해 **Settings** 메뉴를 여세요.

## 장벽 해제하기

오른쪽 입력란에 Twilio Account SID와 Auth Token을 입력하고 *HACK* 버튼을 누르세요. 인증 정보가 유효한지 검사하며, 올바른 값이라면 이 과제를 완료하게 됩니다.

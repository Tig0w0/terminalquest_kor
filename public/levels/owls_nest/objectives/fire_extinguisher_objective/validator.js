module.exports = async function (helper) {
  if (!helper.validationFields.answer1 || helper.validationFields.answer1 !== 'true') {
    return helper.fail(`
      첫 번째 답이 올바르지 않습니다. 설치한 소프트웨어는 컴퓨터의 파일과
      개인 데이터에 접근할 수도 있습니다.
    `);
  }

  if (!helper.validationFields.answer2 || helper.validationFields.answer2 !== 'false') {
    return helper.fail(`
      두 번째 답이 올바르지 않습니다. 인터넷에서 가져온 코드도 컴퓨터에서
      실행되면 파일과 개인 데이터에 접근하는 등 해로운 일을 할 수 있습니다.
    `);
  }

  if (!helper.validationFields.answer3 || helper.validationFields.answer3 !== 'false') {
    return helper.fail(`
      세 번째 답이 올바르지 않습니다. 개인 데이터를 코드 파일에 직접 저장하면
      코드가 공유될 때 그 데이터까지 의도치 않게 공개될 수 있습니다.
    `);
  }

  helper.success(`
    해냈습니다! 코드를 안전하게 사용할 준비가 되었다는 것을 증명했습니다.
    이제 상자에서 소화기를 꺼내 라이언을 구하세요.
  `);
};

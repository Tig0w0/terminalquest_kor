module.exports = helper => {
  if (helper.getNormalizedInput('one') !== 'false') {
    return helper.fail(`
      첫 번째 질문의 정답은 "false"입니다. 신뢰할 수 없는 출처의 코드나
      명령어는 터미널에서 <strong>절대</strong> 실행하지 마세요.
    `);
  }

  if (helper.getNormalizedInput('two').indexOf('true') < 0) {
    return helper.fail(`
      두 번째 질문의 정답은 "true"입니다. 파일이나 폴더를 다루는 명령어,
      특히 삭제하거나 이동하는 명령어를 사용할 때는 주의하세요!
    `);
  }

  helper.success(`
    정답입니다! 길을 막던 레이저가 순식간에 사라집니다.
  `);
};

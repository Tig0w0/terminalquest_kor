module.exports = async helper => {
  try {
    const { answer1, answer2 } = helper.validationFields;
    
    if (!answer1 || answer1.trim() !== 'dogs') {
      return helper.fail(`
        첫 번째 답변이 틀렸습니다. 과제 탭에 있는 배열의 0번째 
        인덱스에는 어떤 배열이 있나요? *그* 배열의 0번째 인덱스에 있는 값은 무엇일까요?
      `);
    }

    if (!answer2 || answer2.trim() !== 'hockey') {
      return helper.fail(`
        두 번째 답변이 틀렸습니다. 과제 탭에 있는 배열의 인덱스 2 위치에는 
        어떤 배열이 있나요? *그* 배열의 인덱스 2에 있는 값은 무엇일까요?
      `);
    }

    helper.success(`
      해냈습니다! 보안 노드를 해킹하자, Infinite Loop 마스터 비밀번호의 
      <span class="highlight">여섯 번째이자 마지막 문자</span>에 대한 인덱스가 
      나타났습니다:<br/><br/>
      <span class="highlight">[0][2]</span>
      <br/><br/>
      이것은 비밀번호를 알아내는 데 필요한 총 6개의 인덱스 중 하나입니다.
    `);
  } catch (e) {
    helper.fail(`
      비밀번호를 처리하는 중 오류가 발생했습니다.
    `);
  }
};

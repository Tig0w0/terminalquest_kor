module.exports = async function (helper) {
  const passcode = helper.getNormalizedInput('passcode');
  const worldState = helper.context.levelState['com.twilioquest.owls_nest'];

  if (!worldState.hackingToolAcquired) {
    return helper.fail(`
      이 시스템을 우회하려면 <strong>해킹 도구</strong>가 필요합니다.
      이 방의 받침대로 걸어가 스페이스바를 눌러 해킹 도구를 획득하세요.
    `);
  }

  if (!passcode) {
    return helper.fail('삐빅! 레이저 해제 암호를 입력해야 합니다.');
  }

  if (passcode !== 'level up') {
    return helper.fail(`
      암호를 인식하지 못했습니다. 해킹 인터페이스의 "목표" 탭을 읽고
      올바른 암호를 확인하세요.
    `);
  }

  helper.success(`
    레이저를 우회하는 데 필요한 암호를 입력했습니다. 곧 레이저가 걷히고
    안개 올빼미에게 가는 길이 열립니다!
  `);
};

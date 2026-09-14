module.exports = async helper => {
  try {
    const baseUrl = 'https://twilioquest-prod.firebaseapp.com';
    const response = await fetch(`${baseUrl}/quest/tracking/trees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        analyticsId: helper.analyticsId,
        createdAt: new Date(),
        missionName: 'ctf',
        objectiveName: 'ctf_plant_tree1',
        playerName: helper.context.settings.name,
      })
    });

    if (response.ok) {
      // 204 indicates success
      helper.success(`
        호주에 나무를 심는 일을 도와주셔서 감사합니다!
      `);
    } else {
      if (response.status === 403) {
        return helper.success(`
          이미 이 나무를 심으셨군요. 잘하셨습니다!
        `);
      } else {
        return helper.fail(`
          요청을 보내는 중 문제가 발생했습니다. 나중에 다시 시도해 주세요!
        `);
      }
    }
  } catch (err) {
    console.log(err);
    helper.fail(
      `나무 심기 요청을 처리하는 중 문제가 발생했습니다:
      <br/></br/>
      ${err}`
    );
  }
};

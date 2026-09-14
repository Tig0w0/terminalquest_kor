const levels = {
  owls_nest: {
    title: '아울의 둥지',
    description:
      "TwilioQuest 프로그램의 전략 연구·개발 프로젝트를 수행하는 극비 연구 시설입니다. 세드릭과 클라우드 탐사선 포그 아울 시제기의 탄생지이기도 합니다.",
    questTitle: '아울의 둥지를 떠나며',
    questDescription:
      'WASD 또는 방향키로 이동하고 Space 키로 상호작용하세요. 파란 스위치를 작동시키세요!',
    defaultGoal:
      '클라우드 탐사선 시제기의 지휘권을 넘겨받으세요. 도움이 필요하거나 자세한 정보를 알고 싶다면 TwilioQuest 과학자들과 대화하세요.',
    flavorTextOverrides: {
      security_pylon:
        '왼쪽의 <em>파란 스위치를 작동시키기</em> 전에는 보안 파일런이 움직이지 않을 것 같다.<br/><br/>스위치 같은 사물과 상호작용하려면 가까이 다가가 <em>Space 키</em>를 눌러야 한다.',
      under_construction: '기지의 이 구역은 아직 공사 중인 것 같다.',
    },
  },
  api_academy: {
    title: 'API 아카데미',
    description:
      '명망 높은 API 마법 아카데미는 클라우드 최고의 고등 교육 기관입니다. 학생들은 이곳에서 API라는 마법 주문을 다루는 법을 배웁니다. 학교를 방문해 아카데미에 들어갈 자격이 있는지 확인해 보세요!',
    questTitle: '아카데미 입학',
    questDescription:
      '아카데미로 향해 입학할 자격이 있음을 증명하세요!',
  },
  house_ceremony: {
    title: 'API 아카데미: 기숙사 배정식',
    description:
      '기숙사 배정식에 도착했습니다. 맹세의 두루마리를 기숙사의 불꽃에 바치고 소속될 기숙사를 선택하세요!',
    questTitle: '기숙사 배정식',
    questDescription:
      '중앙 홀의 기숙사 불꽃에 맹세의 두루마리를 바쳐 소속될 기숙사를 선택하세요.',
  },
  inside_perimeter: {
    title: 'API 아카데미: 교문 안으로',
    description:
      '아카데미가 입학을 허가했습니다. 이제 첫 번째 주문을 배우고 기숙사를 배정받을 차례입니다!',
    questTitle: '기숙사 배정받기',
    questDescription:
      '지하 묘지를 지나 자신이 속할 기숙사를 찾으세요!',
  },
  lovelace_tower: {
    flavorTextOverrides: {
      lockedDoor: '이 문은 꿈쩍도 하지 않는다!',
    },
    title: 'API 아카데미: 러브레이스 탑의 기숙사 시험',
    description:
      '러브레이스 탑에서 기숙사 시험이 시작되었습니다. 탑을 통과해 다음 기숙사의 문을 열 주문을 되찾으세요!',
    questTitle: '러브레이스 탑 완료',
    questDescription: '러브레이스 탑의 기숙사 시험 과제를 완료하세요!',
  },
  'challenge-questions': {
    title: '어둠의 덕타이피움 대장간 습격',
    description:
      '어둠의 덕타이피움 대장간을 습격할 수 있도록 프로그래밍 실력을 연마하세요! 이 미션은 이미 JavaScript로 프로그래밍할 줄 아는 오퍼레이터를 위한 과정입니다.',
    questTitle: '어둠의 덕타이피움 대장간 습격',
    questDescription:
      '어둠의 덕타이피움 대장간 습격에 대비해 프로그래밍 실력을 연마하세요!',
  },
  fog_owl: {
    title: '포그 아울',
    description: '클라우드를 탐험하는 이동식 작전 기지입니다.',
    questTitle: '포그 아울 함내',
    questDescription:
      '항법 지도(nav map)로 클라우드를 탐험하고, VR 훈련으로 기술을 연마하세요.',
  },
  tower_exterior: {
    title: '무한 지식의 탑',
    description:
      "평생 배우는 개발자가 되어 컴퓨터를 개발자답게 사용하는 첫걸음을 내디뎌 보세요! 이 미션에는 '파일 시스템이란 무엇인가?'와 '터미널은 어떻게 사용하는가?' 같은 개발자 기초 주제가 계속 추가됩니다.",
    questTitle: '무한 지식의 탑',
    questDescription:
      '평생 배우는 개발자가 되어 컴퓨터를 개발자답게 사용하는 첫걸음을 내디뎌 보세요!',
  },
  tower_of_knowledge: {
    title: '무한 지식의 탑',
    description:
      "평생 배우는 개발자가 되어 컴퓨터를 개발자답게 사용하는 첫걸음을 내디뎌 보세요! 이 미션에는 '파일 시스템이란 무엇인가?'와 '터미널은 어떻게 사용하는가?' 같은 개발자 기초 주제가 계속 추가됩니다.",
    questTitle: '무한 지식의 탑',
    questDescription:
      '평생 배우는 개발자가 되어 컴퓨터를 개발자답게 사용하는 첫걸음을 내디뎌 보세요!',
  },
  javascript: {
    title: 'JavaScript 테스트 연구소',
    description:
      'TwilioQuest 프로그램이 JavaScript 기술의 최신 발전을 연구하는 첨단 시설입니다. 연구소는 한 오퍼레이터에게 기지를 방문해 보안 상태를 점검해 달라고 요청했습니다.',
    questTitle: 'JavaScript 테스트 연구소',
    questDescription: '기지를 조사하고 연구팀을 도와주세요!',
  },
  open_source: {
    title: '오픈 소스의 숲',
    description:
      '오픈 소스의 드루이드들은 여러 세대에 걸쳐 이 신성한 숲의 세계를 지키며 오픈 소스 프로젝트에 기여하려는 이들을 도왔습니다. 신성한 유물인 오픈 소스의 불꽃으로 향하는 길이 막혔다는 현지 보고가 들어왔습니다. 가능한 한 빨리 조사하세요!',
    questTitle: '오픈 소스의 불꽃 구출',
    questDescription:
      '숲을 탐험하고 오픈 소스의 불꽃으로 향하는 길을 다시 여세요.',
  },
  python: {
    title: 'Python 사원',
    description:
      '전설적인 탐험가 톨레도 반 포섬의 발자취를 따라 고대 Python 도시의 마지막 유적인 Python 사원의 비밀을 밝히세요. Python 프로그래밍 언어와 관련 도구를 사용해 퀘스트를 완료하는 방법을 배웁니다.',
    questTitle: 'Python 사원',
    questDescription: '고대 Python 개발자들의 비밀을 밝혀내세요!',
  },
  basic_training: {
    title: 'Twilio API 설정',
    description:
      '여기서 시작해 Twilio 계정을 설정하고 Twilio API 사용법을 배워 보세요!',
    questTitle: 'Twilio API 설정',
    questDescription:
      'API 인증 정보를 설정한 뒤 Messaging API를 살펴보세요!',
  },
  programmable_voice: {
    title: 'Twilio Voice API',
    description: 'Twilio API로 전화를 걸고 받는 방법을 배웁니다.',
  },
  twilio_messaging: {
    title: 'Twilio Messaging API',
    description:
      'Twilio 계정으로 SMS와 MMS 메시지를 주고받는 방법을 배웁니다.',
  },
};

const mapObservationOverrides = {
  owls_nest: {
    fuel_line_fire_left:
      '<i>불길이 너무 거셉니다. 지나가려면 <em>소화기</em>가 필요합니다!<br/><br/>케빈은 기지 북서쪽 구석의 <em>빨간색 상자</em> 안에 소화기가 있다고 했습니다.</i>',
    fuel_line_fire_right:
      '<i>불길이 너무 거셉니다. 지나가려면 <em>소화기</em>가 필요합니다!<br/><br/>케빈은 기지 북서쪽 구석의 <em>빨간색 상자</em> 안에 소화기가 있다고 했습니다.</i>',
  },
};

const runtimeTextOverrides = {
  'I should probably speak to Cedric to see if any more plans have been found for the <span class="highlight">Dark Ducktypium Forge</span>.':
    '<span class="highlight">어둠의 덕타이피움 대장간</span> 설계도를 더 찾았는지 세드릭과 이야기해 봐야겠다.',
  'I\'ve completed everything in the <span class="highlight">Challenge Question</span> mission for now!':
    '지금 할 수 있는 <span class="highlight">도전 문제</span> 미션을 모두 완료했다!',
  "I've completed everything in the Challenge Question mission for now!":
    '지금 할 수 있는 도전 문제 미션을 모두 완료했다!',
  'I should complete the last objective to clean up this mess!':
    '이 엉망진창인 상황을 정리하려면 마지막 과제를 완료해야 해!',
  'I need to complete the current objective before I can pass through to the next room.':
    '다음 방으로 넘어가려면 현재 과제를 먼저 완료해야 해.',
  'I\'ve completed everything in the <span class="highlight">API Academy House Gauntlet</span> for now!':
    '지금 할 수 있는 <span class="highlight">API 아카데미 기숙사 대항전</span> 과제를 모두 완료했다!',
  "I've completed everything in the API Academy House Gauntlet for now!":
    '지금 할 수 있는 API 아카데미 기숙사 대항전 과제를 모두 완료했다!',
  'I should go find the toolshed and see if there is an extra wand inside!':
    '도구 창고로 가서 여분의 지팡이가 있는지 찾아봐야겠어요!',
  'I think I need to learn a spell later to do anything here!':
    '여기서 무언가 하려면 먼저 주문을 배워야 할 것 같아요!',
  'I need the magic key to unlock the Scroll Room. I should activate all the house statues inside these Catacombs before returning.':
    '두루마리 방을 열려면 마법 열쇠가 필요합니다. 돌아오기 전에 지하 묘지에 있는 모든 기숙사 석상을 활성화해야겠어요.',
  "I've obtained the magic key. I should go and claim my pledge scroll!":
    '마법 열쇠를 얻었습니다. 이제 서약 두루마리를 찾으러 가야겠어요!',
  "I've obtained my pledge scroll. Time to head to the Main Hall and choose my house.":
    '서약 두루마리를 얻었습니다. 중앙 홀로 가서 기숙사를 선택할 시간이에요.',
  'I got my pledge scroll! I should head to the Main Hall to choose my house now!':
    '서약 두루마리를 얻었습니다! 이제 중앙 홀로 가서 기숙사를 선택해야겠어요!',
  'Lovelace Tower is the first house in the House Gauntlet. I should find the House Lovelace corridor!':
    '기숙사 대항전은 러브레이스 탑에서 시작합니다. 러브레이스 기숙사 복도를 찾아야겠어요!',
  'I should head to Lovelace Tower to start the House Gauntlet.':
    '기숙사 대항전을 시작하러 러브레이스 탑으로 가야겠어요.',
};

export function localizeLevel(levelName, levelInfo) {
  return Object.assign({}, levelInfo, levels[levelName] || {});
}

export function localizeMap(levelName, mapData) {
  const overrides = mapObservationOverrides[levelName];
  if (!overrides) {
    return mapData;
  }

  (mapData.layers || []).forEach(layer => {
    (layer.objects || []).forEach(object => {
      const properties = object.properties || [];
      const key = properties.find(property => property.name === 'key');
      const observation = properties.find(
        property => property.name === 'observation'
      );

      if (key && observation && overrides[key.value]) {
        observation.value = overrides[key.value];
      }
    });
  });

  return mapData;
}

export function localizeRuntimeText(text) {
  if (typeof text !== 'string') {
    return text;
  }

  const normalizedText = text.trim().replace(/\s+/g, ' ');
  return runtimeTextOverrides[normalizedText] || text;
}

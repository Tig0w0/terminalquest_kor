import config from '../config/config';
import {
  getContext,
  setContext
} from './context';


async function getTeamFromBackend(joinCode) {
  try {
    const response = await fetch(config.apiBaseUrl + `api/v1/teams/joinCode/${joinCode}`);
  
    if (response.status === 404) {
      return {
        success: false,
        message: "존재하지 않는 팀입니다!",
      };
    }
    
    const team = await response.json();

    if (team.errors) {
      console.error(team.errors);

      return {
        success: false,
        message: "문제가 발생했습니다!",
      };
    }

    return {
      success: true,
      team
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "문제가 발생했습니다!",
    };
  }
}

function getJoinedTeams() {
  const teams = getContext('teams');

  if (teams.joined.length === 0) {
    return false;
  }

  return teams.joined;
}

function isTeamAlreadyJoined(joinCode) {
  const teams = getContext('teams');

  return teams.joined.some(team => team.joinCode === joinCode);
}

function connectTeam(team) {
  const teams = getContext('teams');

  const newTeam = {
    id: team.id,
    joinCode: team.data.joinCode,
    displayName: team.data.displayName
  }

  setContext({
    teams: {
      ...teams,
      joined: [
        ...teams.joined,
        newTeam
      ]
    }
  });
}

function disconnectTeam(team) {
  const teams = getContext('teams');

  // Filter out team being disconnected
  const joined = teams.joined.filter(joinedTeam => joinedTeam.id !== team.id);

  setContext({
    teams: {
      ...teams,
      joined
    }
  })
}

function joinTeam(id) {
  return new Promise(async resolve => {
    if (id === '') {
      return resolve({
        success: false,
        message: '코드를 입력해야 합니다!',
      });
    }

    if (isTeamAlreadyJoined(id)) {
      return resolve({
        success: false,
        message: "이미 참가 중인 팀입니다!",
      });
    }

    const teamResult = await getTeamFromBackend(id);

    if (!teamResult.success) {
      return resolve({
        success: teamResult.success,
        message: teamResult.message
      });
    }

    const { team } = teamResult;

    connectTeam(team);

    return resolve({
      success: true,
      message: `참가 완료: "${team.data.displayName}"!`,
    });
  });
}


export {
  getJoinedTeams,
  isTeamAlreadyJoined,
  connectTeam,
  disconnectTeam,
  joinTeam
}

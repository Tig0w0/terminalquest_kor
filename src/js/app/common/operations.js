import config from '../config/config';
import {
  getContext,
  setContext
} from './context';


async function getOperationFromBackend(joinCode) {
  try {
    const response = await fetch(config.apiBaseUrl + `api/v1/operations/joinCode/${joinCode}`);

    if (response.status === 404) {
      return {
        success: false,
        message: "존재하지 않는 작전입니다!",
      };
    }

    const operation = await response.json();

    if (operation.errors) {
      console.error(operation.errors);
      
      return {
        success: false,
        message: "문제가 발생했습니다!",
      };
    }

    return {
      success: true,
      operation
    };
  } catch (err) {
    console.error(err);
    
    return {
      success: false,
      message: "문제가 발생했습니다!",
    };
  }
}

function getJoinedOperations() {
  const operations = getContext('operations');

  if (operations.joined.length === 0) {
    return false;
  }

  return operations.joined;
}

function isOperationAlreadyJoined(joinCode) {
  const operations = getContext('operations');

  return operations.joined.some(operation => operation.joinCode === joinCode);
}

function connectOperation(operation) {
  const operations = getContext('operations');

  const newOperation = {
    id: operation.id,
    joinCode: operation.data.joinCode,
    displayName: operation.data.displayName
  }

  setContext({
    operations: {
      ...operations,
      joined: [
        ...operations.joined,
        newOperation
      ]
    }
  });
}

function disconnectOperation(operation) {
  const operations = getContext('operations');

  // Filter out operation being disconnected
  const joined = operations.joined.filter(joinedOperation => joinedOperation.id !== operation.id);

  setContext({
    operations: {
      ...operations,
      joined
    }
  })
}

function joinOperation(id) {
  return new Promise(async resolve => {
    if (id === '') {
      return resolve({
        success: false,
        message: '코드를 입력해야 합니다!',
      });
    }

    if (isOperationAlreadyJoined(id)) {
      return resolve({
        success: false,
        message: "이미 참가 중인 작전입니다!",
      });
    }

    const operationResult = await getOperationFromBackend(id);

    if (!operationResult.success) {
      return resolve({
        success: operationResult.success,
        message: operationResult.message
      });
    }

    const { operation } = operationResult;

    connectOperation(operation);

    return resolve({
      success: true,
      message: `참가 완료: "${operation.data.displayName}"!`,
    });
  });
}


export {
  getJoinedOperations,
  isOperationAlreadyJoined,
  connectOperation,
  disconnectOperation,
  joinOperation
}

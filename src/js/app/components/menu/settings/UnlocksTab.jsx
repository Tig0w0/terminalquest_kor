import React, { Fragment } from 'react';
import { keypress } from 'keypress.js';
import { Firestore } from '../../../common/firebase.js';
import { addItems } from '../../context_provider/itemsHelper';
import { getContext, setContext } from '../../../common/context';
import ga from '../../../common/analytics';
import AsyncInputBox from './AsyncInputBox';

function isCodeUsed(code) {
  const unlockCodes = getContext('unlockCodes');

  if (unlockCodes === null) {
    return false;
  }

  return unlockCodes.includes(code);
}

function markCodeUsed(code) {
  let unlockCodes = getContext('unlockCodes');

  if (unlockCodes === null) {
    unlockCodes = [];
  }

  setContext({ unlockCodes: [...unlockCodes, code] });
}

function getItem(itemKey) {
  const items = getContext('items');

  return items[itemKey];
}

export default class UnlocksTab extends React.Component {
  validateCode(code) {
    return new Promise(resolve => {
      if (isCodeUsed(code)) {
        return resolve({ success: false, message: '이미 사용한 코드입니다!' });
      }

      Firestore.collection('unlockCodes')
        .where('codeValue', '==', code)
        .get()
        .then(({ docs }) => {
          if (docs.length === 0) {
            // Code is not registered in Firebase
            return resolve({
              success: false,
              message: '올바르지 않은 코드입니다!',
            });
          }

          if (docs.length > 1) {
            console.warn(
              `More than one unlock code in Firebase matches this code, "${code}".`
            );
          }

          const [unlockCodeDoc] = docs;
          const response = unlockCodeDoc.data();

          addItems([response.unlockItemName]);
          markCodeUsed(response.codeValue);

          ga.event(
            'Promotions',
            'Unlock Code Redeemed',
            response.codeValue,
            null,
            'Settings > Unlocks',
            '/menu/settings'
          );

          const redeemedReward = getItem(response.unlockItemName).displayName;

          return resolve({
            success: true,
            message: `획득: "${redeemedReward}"!`,
          });
        });
    });
  }

  render() {
    return (
      <Fragment>
        <h3>특별 아이템 잠금 해제</h3>
        <p>
          TerminalQuest 특별 아이템의 잠금 해제 코드를 받으셨나요?
          아래에 코드를 입력하면 인벤토리에 아이템이 추가됩니다!
        </p>
        <h4 className="mv2">잠금 해제 코드</h4>
        <AsyncInputBox
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          defaultButtonLabel="사용"
          resolvingButtonLabel="확인 중..."
          onSubmit={this.validateCode}
        />
      </Fragment>
    );
  }
}

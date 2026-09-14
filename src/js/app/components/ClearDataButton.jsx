import React from 'react';
import * as jetpack from 'fs-jetpack';
import db from '../common/database';
import Store from 'electron-store';
import Button from './Button';
import config from '../config/config';
import { describeSchema } from '../common/context/schema';

function clearStoreValues() {
  const schemaDescription = describeSchema();
  const store = new Store();

  Object.entries(schemaDescription.fields).forEach(([fieldKey, field]) => {
    if (store.has(fieldKey)) {
      if (!field.meta || (field.meta && !field.meta.persistOnClearProgess)) {
        store.delete(fieldKey);
      }
    }
  })
}

export default class ClearDataButton extends React.Component {
  clearUserData() {
    if (
      !window.confirm(
        `모든 사용자 데이터와 진행 상황이 삭제됩니다. 계속할까요?`
      ) ||
      !window.confirm(
        `정말로 모든 아이템을 삭제하고 게임 진행 상황을 초기화합니다. 확실히 계속하시겠습니까?`
      )
    ) {
      console.log('aborting data clear...');
      return;
    }

    // Upon confirmation, delete all user data and reload the window
    console.log('clearing data...');

    // Clear data stored on disk
    clearStoreValues();

    // Delete saved user code
    jetpack.remove(config.codeStoragePath);

    // Drop IndexedDB database and reload browser window
    db.delete()
      .then(() => {
        console.log('Database successfully deleted.');
      })
      .catch(err => {
        console.error('Could not delete database');
        console.error(err);
      })
      .finally(() => {
        window.location.reload();
      });
  }

  render() {
    const clearButtonStyles = {
      fontFamily: 'Monaco, "Source Code Pro", Consolas, monospace',
      height: '48px',
    };

    return (
      <Button
        label="게임 데이터 삭제"
        style={clearButtonStyles}
        className="fr bw3 f6 ma2"
        onClick={() => this.clearUserData()}
      />
    );
  }
}

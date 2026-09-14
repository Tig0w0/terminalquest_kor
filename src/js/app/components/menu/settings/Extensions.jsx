import React, { useEffect, useState } from 'react';
import {
  getBundledExtensionDirectories,
  getExternalExtensionDirectories,
  areExtensionsEnabled,
  getExtensionDirectory,
} from '../../../common/extensions';
import Button from '../../Button';
import InlineButton from './InlineButton';
import InputTextField from './InputTextField';
import { remote } from 'electron';

async function getDirectoryPath({ defaultPath, buttonLabel, title }) {
  const dialogueOptions = {
    title,
    message: title,
    buttonLabel,
    properties: ['openDirectory'],
  };

  if (defaultPath) {
    dialogueOptions.defaultPath = defaultPath;
  }

  const result = await remote.dialog.showOpenDialog(dialogueOptions);
  return result.filePaths[0];
}
function ExtensionsList({ extensions }) {
  return extensions.length > 0 ? (
    <ul>
      {extensions.map(({ name, absolutePath, isValid }) => (
        <li key={absolutePath}>
          {name} -{' '}
          <span
            style={{
              color: isValid ? '#00ff00' : '#ff0000',
            }}
          >
            {isValid ? '로드됨' : '실패'}
          </span>
        </li>
      ))}
    </ul>
  ) : (
    <span>없음</span>
  );
}

function AllExtensionsList() {
  const [bundledExtensions, setBundledExtensions] = useState([]);
  const [externalExtensions, setExternalExtensions] = useState([]);

  const loadExtensions = async () => {
    const extensionQueries = [
      getBundledExtensionDirectories(),
      getExternalExtensionDirectories(),
    ];

    const [bundled, external] = await Promise.all(extensionQueries);

    setBundledExtensions(bundled);
    setExternalExtensions(external);
  };

  useEffect(() => {
    loadExtensions();
  }, []);

  return (
    <>
      <h4>외부 확장 기능</h4>
      <p>위 디렉터리에서 불러온 확장 기능입니다.</p>
      <ExtensionsList extensions={externalExtensions} />
      <br />
      <h4>내장 확장 기능</h4>
      <p>
        TerminalQuest를 다운로드할 때 기본으로 포함된 확장 기능입니다.
      </p>
      <ExtensionsList extensions={bundledExtensions} />
    </>
  );
}

function EnabledExtensions({ onFocus, onBlur, save }) {
  const directory = getExtensionDirectory();

  return (
    <>
      <p>
        TerminalQuest가 아래 폴더에서 확장 기능을 불러옵니다. 일부 확장 기능은
        사용할 수 있게 되기 전에{' '}
        <span className="highlight">게임을 다시 시작해야 할 수 있습니다</span>
        (예: 미션 컴퓨터에 추가되는 새 미션).
      </p>
      <br />
      <br />
      <Button
        onClick={() =>
          save(
            'extensions',
            {
              enabled: false,
            },
            'context'
          )
        }
      >
        확장 기능 비활성화
      </Button>
      <br />
      <br />
      <h4>확장 기능 디렉터리</h4>
      <div>
        <InputTextField
          value={directory || '선택한 디렉터리 없음'}
          disabled
        ></InputTextField>
        <InlineButton
          label="디렉터리 선택"
          onClick={async () => {
            const directoryPath = await getDirectoryPath({
              defaultPath: directory,
              buttonLabel: '선택',
              title: '확장 기능을 불러올 디렉터리를 선택하세요',
            });

            if (!directoryPath) {
              return;
            }

            save(
              'extensions',
              {
                directory: directoryPath,
              },
              'context'
            );
          }}
        />
      </div>
      <br />
      <h3>로드된 확장 기능</h3>
      <AllExtensionsList />
      <br />
    </>
  );
}

function DisabledExtensions({ save }) {
  return (
    <>
      <p>
        아래 버튼을 클릭해 확장 기능을 활성화하세요. 확장 기능에는
        TerminalQuest의 새 레벨, 아이템 또는 기능이 포함될 수 있습니다.
      </p>
      <p>
        <span className="highlight">주의하세요</span>! TerminalQuest에 설치한
        확장 기능은 컴퓨터에서 코드를 실행할 수 있습니다. 이 기능을 사용하기 전에
        확장 기능의 제작자를 신뢰할 수 있는지 확인하세요. 문제가 있는 확장 기능은
        게임을 불안정하게 만들며, 게임을 다시 설치해야 하는 상황을 일으킬 수도 있습니다.
      </p>
      <Button
        onClick={() =>
          save(
            'extensions',
            {
              enabled: true,
            },
            'context'
          )
        }
      >
        확장 기능 활성화
      </Button>
    </>
  );
}

export default function Extensions({ onFocus, onBlur, save }) {
  const enabled = areExtensionsEnabled();

  return (
    <>
      <h3>확장 기능</h3>
      {enabled ? (
        <EnabledExtensions onFocus={onFocus} onBlur={onBlur} save={save} />
      ) : (
        <DisabledExtensions save={save} />
      )}
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import ConcealedInputField from './ConcealedInputField';

export default class EnvironmentVariables extends React.Component {
  static propTypes = {
    env: PropTypes.object,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  };

  state = {
    envVarsLocked: true,
  };

  toggleEnvVarLock() {
    this.setState({ envVarsLocked: !this.state.envVarsLocked });
  }

  renderLockControl() {
    return (
      <span key="envToggle"
        className="underline pointer"
        onClick={this.toggleEnvVarLock.bind(this)}
      >
        {this.state.envVarsLocked ? '잠금 해제' : '잠그기'}
      </span>
    );
  }

  renderEmptyState() {
    return (
      <h5>
        미션에서 잠금 해제한 변수가 여기에 표시됩니다.
      </h5>
    );
  }

  render() {
    const envKeys = Object.keys(this.props.env);

    return (
      <div>
        <h3 className="mb2" key="title">
          환경 변수(Environment Variables)
        </h3>
        <p>
          TerminalQuest의 미션은 여러 미션에서 함께 사용할 중요한 데이터를
          "환경 변수(environment variable)"로 저장합니다. 값을 변경해야 한다면
          "잠금 해제"를 클릭한 뒤 아래 입력란에서 수정하세요.
        </p>
        {!!envKeys.length ? this.renderLockControl() : this.renderEmptyState()}
        {envKeys
          .filter(key => this.props.env[key] !== undefined)
          .map(key => {
            const { value, concealed } = this.props.env[key];
            if (concealed) {
              return (
                <div key={key}>
                  <p className="mb2">{key}</p>
                  <ConcealedInputField
                    className="pa2 w-100 mw7"
                    onChange={value => this.props.onChange(key, value, 'env')}
                    type="text"
                    disabled={this.state.envVarsLocked}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    value={'•'.repeat(value.length)}
                  />
                </div>
              );
            } else {
              return (
                <div key={key}>
                  <p className="mb2">{key}</p>
                  <input
                    className="pa2 w-100 mw7"
                    onChange={evt =>
                      this.props.onChange(key, evt.target.value, 'env')
                    }
                    type="text"
                    disabled={this.state.envVarsLocked}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    value={value}
                  />
                </div>
              );
            }
          })}
      </div>
    );
  }
}

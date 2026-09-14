import React from 'react';
import PropTypes from 'prop-types';
import { keypress } from 'keypress.js';
import sharedListener from '../../common/listener';
import MenuContainer from '../MenuContainer';
import NameStep from './NameStep';
import AvatarStep from './AvatarStep';
import LiveEventStep from './LiveEventStep';
import { context } from '../../common/context';
import ga from '../../common/analytics';

export default class OnboardingInterface extends React.Component {
  static propTypes = {
    close: PropTypes.func,
  };

  static contextType = context;

  state = {
    step: 1,
  };

  finalStep = 3;

  componentDidMount() {
    sharedListener.stop_listening();

    this.listener = new keypress.Listener();
    this.listener.simple_combo('esc', evt => this.prevStep());
    this.listener.simple_combo('enter', evt => this.nextStep());

    this.resizeObserver = new ResizeObserver(() => {
      this.scrollableRef.scrollTop = this.scrollableRef.scrollHeight;
    });
    this.resizeObserver.observe(this.containerRef);

    ga.pageview('/onboarding', 'Onboarding Interface');
  }

  componentWillUnmount() {
    this.listener.destroy();
    this.resizeObserver.unobserve(this.containerRef);
    sharedListener.listen();
  }

  prevStep() {
    if (this.state.step !== 1) {
      this.setState({ step: this.state.step - 1 });
    }
  }

  nextStep() {
    if (this.state.stepIsValid && this.state.step !== this.finalStep) {
      this.setState({ step: this.state.step + 1 });
    } else if (this.state.step === this.finalStep) {
      this.props.close();
    }
  }

  render() {
    return (
      <div className="OnboardingInterface bg-black">
        <MenuContainer title="오퍼레이터 로그인" showCloseButton={false}>
          <div
            className="pa2 h-100 overflow-y-scroll"
            ref={node => (this.scrollableRef = node)}
          >
            <div ref={node => (this.containerRef = node)}>
              <NameStep
                isActive={this.state.step === 1}
                onClick={() => this.setState({ step: 1 })}
                setValid={stepIsValid => this.setState({ stepIsValid })}
              />

              {this.state.step >= 2 && (
                <AvatarStep
                  isActive={this.state.step === 2}
                  onClick={() => this.setState({ step: 2 })}
                  setValid={stepIsValid => this.setState({ stepIsValid })}
                />
              )}

              {/* {this.state.step >= 3 && (
                <LiveEventStep
                  isActive={this.state.step === 3}
                  onClick={() => this.setState({ step: 3 })}
                  setValid={stepIsValid => this.setState({ stepIsValid })}
                />
              )} */}

              {this.state.step >= this.finalStep && (
                <div className="mt4">
                  <h3>환영합니다, {this.context.settings.name}.</h3>
                  {this.context.liveEvent && (
                    <h3>{this.context.liveEvent.name}에 연결되었습니다.</h3>
                  )}
                </div>
              )}

              {this.state.stepIsValid && (
                <div className="mt4">
                  계속하려면{' '}
                  <span
                    className="yellow pointer"
                    onClick={() => this.nextStep()}
                  >
                    [ENTER]
                  </span>{' '}
                  키를 누르세요
                  {this.state.step > 1 && (
                    <span>
                      &nbsp;또는 뒤로 가려면{' '}
                      <span
                        className="yellow pointer"
                        onClick={() => this.prevStep()}
                      >
                        [ESC]
                      </span>{' '}
                      키를 누르세요
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </MenuContainer>
      </div>
    );
  }
}

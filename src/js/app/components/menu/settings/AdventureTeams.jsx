import React, { Fragment } from 'react';
import AsyncInputBox from './AsyncInputBox';
import { joinTeam, getJoinedTeams, disconnectTeam } from '../../../common/teams';

export class JoinTeam extends React.Component {
  render() {
    const { enableSubmitHotkey, onSuccess = () => {} } = this.props;
    return (
      <AsyncInputBox
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        defaultButtonLabel="참가"
        resolvingButtonLabel="참가 중..."
        onSubmit={joinTeam}
        onSuccess={onSuccess}
        enableSubmitHotkey={enableSubmitHotkey}
      />
    );
  }
}

export class CurrentTeam extends React.Component {
  render() {
    const teams = getJoinedTeams();
    
    return (
      <>
        <h4 className="mt4">현재 참가 중인 팀</h4>
        {teams ? 
          teams.map(
            team => (
            <Fragment key={team.id}>
              <h5 className="mv2">{team.displayName}</h5>
              <div className={`mb3 red`}>
                <span className={`pb1 bb b--red pointer`}
                    onClick={() => disconnectTeam(team)}>
                  팀 나가기
                </span>
              </div>
            </Fragment>
          )
          ) : (
          <p>현재 참가 중인 팀이 없습니다.</p>
        )}
      </>
    );
  }
}

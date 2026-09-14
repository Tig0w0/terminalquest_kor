import React from 'react';
import ga from '../../common/analytics';

export default class Help extends React.Component {
  componentDidMount() {
    ga.pageview('/menu/help', 'Help Screen');
  }

  render() {
    return (
      <div className="Help pv3">
        <h2>도움말</h2>

        <h4>이동</h4>
        <p>
          캐릭터는 <strong>방향키</strong> 또는
          <strong> [W], [A], [S], [D]</strong> 키로 움직입니다.
        </p>
        <p>
          사람이나 사물과 상호작용하려면 <strong>Space 키</strong>를 누르세요.
        </p>

        <h4>기술 지원</h4>
        <p>
          코드 과제나 기술적인 문제로 도움이 필요하신가요? <a href="https://twil.io/tq-discord">Discord 서버</a>에서
          다른 오퍼레이터들과 대화해 보세요.
        </p>
      </div>
    );
  }
}

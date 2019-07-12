import React from 'react';
import "../App.css"

class PlayerCard extends React.Component {
  render() {
    return (
      <div className="playerCard">
        <p className="cardYear">2017年</p>
        <p className="cardName">銀次</p>
        <p className="cardPos">一塁手・二塁手</p>
        <p className="cardPers">やんちゃ → 弾道・パワー </p>
        <p className="cardTokunou">特殊能力</p>
        <p className="cardPolicy">育成方針</p>
      </div>
    );
  }
}

export default PlayerCard;
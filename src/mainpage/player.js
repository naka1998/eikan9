import React from 'react';
import "../App.css"

class PlayerCard extends React.Component {
  render() {
    return (
      <div className="playerCard">
        <p className="cardYear">{this.props.year + "年"}</p>
        <p className="cardName">{this.props.name}</p>
        <div className="cardPos">
          <p className="cardPos1">{"メイン: " + this.props.pos1}</p>
          <p className="cardPos2">{"サブ: " + this.props.pos2}</p>
          <p className="cardPos3">{"サブ: " + this.props.pos3}</p>
        </div>
        <p className="cardPers">
          {"性格: " + this.props.pers + "→" + this.props.persAbility}
        </p>
        <p className="cardTokunou">{this.props.tokunou}</p>
        <p className="cardPolicy">{this.props.policy}</p>
      </div>
    );
  }
}

export default PlayerCard;
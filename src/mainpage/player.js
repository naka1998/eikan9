import React from 'react';
import "../App.css"

class TokunouDesc extends React.Component {
  renderdesc(value) {
    return (
      <li
        key="liTokuDesc"
        className="tokunouList">
        {value}
      </li >
    );
  }
  render() {
    return (
      <ul
        key="ulTokuDesc"
        className="tokunouUl">
        {this.props.tokunou.map((value) => this.renderdesc(value))}
      </ul>
    );
  }
}

const PlayerCard = (props) => {
  return (
    <div
      key="player"
      className="playerCard">
      <div className="yearAndName">
        <p className="cardYear">{props.year + "年"}</p>
        <p className="cardName">{props.name}</p>
      </div>
      <div className="cardPos">
        <p className="cardPos1">{"メイン: " + props.pos1}</p>
        <p className="cardPos2">{"サブ: " + props.pos2}</p>
        <p className="cardPos3">{"サブ: " + props.pos3}</p>
      </div>
      <p className="cardPers">
        {"性格: " + props.pers + "→" + props.persAbility}
      </p>
      <TokunouDesc
        key="tokuDesc"
        tokunou={props.tokunou} />
      <p className="cardPolicy">{"特記事項: " + props.policy}</p>
    </div>
  )
}

export default PlayerCard;
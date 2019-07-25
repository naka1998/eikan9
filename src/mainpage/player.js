import React from 'react';
import "../App.css"

const PlayerCard = (props) => {
  return (
    <div className="playerCard">
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
      <p className="cardTokunou">{props.tokunou}</p>
      <p className="cardPolicy">{"特記事項: " + props.policy}</p>
    </div>
  )
}

export default PlayerCard;
import React from 'react';

const Position = (props) => {
  return (
    <div className="posDiv">
      <div>ポジション</div>
      <div className="posDivChild">
        {[0, 1, 2].map((i) => {
          return (
            <Pos
              value={props.value}
              num={i}
              idNum={props.idNum}
              posChange={props.posChange} />
          )
        })}
      </div>
    </div>
  );
}

const Pos = (props) => {
  return (
    <span>{props.num === 0 ? "メイン" : "サブ" + props.num}
      <select
        value={props.value[props.num]}
        onChange={(e) => props.posChange(e, props.num, props.idNum)}>
        <option value="0">なし</option>
        <option value="1">投手</option>
        <option value="2">捕手</option>
        <option value="3">一塁手</option>
        <option value="4">二塁手</option>
        <option value="5">三塁手</option>
        <option value="6">遊撃手</option>
        <option value="7">外野手</option>
      </select>
    </span>
  );
}

export default Position;

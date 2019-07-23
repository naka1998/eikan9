import React from 'react';

class Position extends React.Component {
  render() {
    return (
      <div className="posDiv">
        <div>ポジション</div>
        <div className="posDivChild">
          {[0, 1, 2].map((i) => {
            return (
              <Pos
                value={this.props.value}
                num={i}
                idNum={this.props.idNum}
                posChange={this.props.posChange} />
            )
          })}
        </div>
      </div>
    );
  }
}

class Pos extends React.Component {
  render() {
    return (
      <span>{this.props.num === 0 ? "メイン" : "サブ" + this.props.num}
        <select
          value={this.props.value[this.props.num]}
          onChange={(e) => this.props.posChange(e, this.props.num, this.props.idNum)}>
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
}

export default Position;

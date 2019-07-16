import React from 'react';

class Position extends React.Component {
  render() {
    return (
      <div>
        <div>ポジション</div>
        <span id="posSpan">
          <MainPos />
          <SubPos />
          <SubPos />
        </span>
      </div>
    );
  }
}

class MainPos extends React.Component {
  render() {
    return (
      <span>メイン:
      <select>
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

class SubPos extends React.Component {
  render() {
    return (
      <span>サブ2:
      <select>
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

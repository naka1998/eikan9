import React from 'react';

class Position extends React.Component {
  render() {
    return (
      <div>
        <MainPos />
        <SubPos />
        <SubPos />
      </div>
    );
  }
}

class MainPos extends React.Component {
  render() {
    return (
      <select>
        <option value="1">投手</option>
        <option value="2">捕手</option>
        <option value="3">一塁手</option>
        <option value="4">二塁手</option>
        <option value="5">三塁手</option>
        <option value="6">遊撃手</option>
        <option value="7">外野手</option>
      </select>
    );
  }
}

class SubPos extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Position;

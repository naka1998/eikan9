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
        <option>1</option>
      </select>
    );
  }
}

class SubPos extends React.Component {
  render() {
    return (
      <select>
        <option>1</option>
      </select>
    );
  }
}

export default Position;

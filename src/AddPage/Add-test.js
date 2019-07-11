import React from "react";

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

class Add extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="number" value="2019" id="yearForm" name="yearForm" />
            <label htmlFor="yearForm">年度選手追加</label>
          </div>
          <input type="text" name="nameForm" value="名前" />
          <Position />
          <select name="personality">
            <option value="0">1</option>
          </select>
          <button name="tokunou">tokunou</button>
          <textarea name="traPolicy"></textarea>
          <button name="addButton">add</button>
          <button name="switchButton">switch</button>
        </form>
      </div>
    );
  }
}


export default Add;
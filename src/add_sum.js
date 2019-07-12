//  選手を一括で追加していくページ
import React from 'react';
import "./App.css";
import "./addsum.css";
import AddBar from "./Add_or_Change/addbar"
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouPop from "./tokunou/tokunoupop";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";

class AddCard extends React.Component {
  render() {
    return (
      <div className="addcard">
        <Year />
        <Name />
        <Position />
        <Personality />
        <TokunouPop />
        <TraningPolicy />
      </div>
    );
  }
}

class AddSum extends React.Component {
  render() {
    return (
      <span>
        <div id="wrap">
          <AddCard />
          <AddCard />
          <AddCard />
          <AddCard />
          <AddCard />
          <AddCard />
        </div>
        <AddBar />
      </span>
    );
  }
}
export default AddSum;
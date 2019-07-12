//  選手を個別に追加していくページ
import React from 'react';
import './App.css';
import AddBar from "./Add_or_Change/addbar"
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouPop from "./tokunou/tokunoupop";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";

class Add extends React.Component {
  render() {
    return (
      <span>
        <div id="wrap">
          <Year />
          <Name />
          <Position />
          <Personality />
          <TokunouPop />
          <TraningPolicy />
        </div>
        <AddBar />
      </span>
    );
  }
}
export default Add;
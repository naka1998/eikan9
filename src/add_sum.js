//  選手を一括で追加していくページ
import React from 'react';
import "./App.css";
import AddButton from "./Add_or_Change/addbutton";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import SwitchingButton from "./Add_or_Change/switchingbutton";
import TokunouButton from "./Add_or_Change/tokunoubutton"; 
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";
 
class AddCard extends React.Component {
  render() {
    return (
      <div>
        <Year />
        <Name />
        <Position />
        <Personality />
        <TokunouButton />
        <TraningPolicy />
        <SwitchingButton />
      </div>
    );
  }
}
class AddSum extends React.Component {
  render() {
    return (
      <div id="wrap">
        <AddCard />
        <AddButton />
      </div>
    );
  }
}
export default AddSum;
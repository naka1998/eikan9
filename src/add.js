//  選手を個別に追加していくページ
import React from 'react';
import './App.css';
import AddButton from "./Add_or_Change/addbutton";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import SwitchingButton from "./Add_or_Change/switchingbutton";
import TokunouButton from "./Add_or_Change/tokunoubutton";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";

class Add extends React.Component {
  render() {
    return (
      <div id="wrap">
        <Year />
        <Name />
        <Position />
        <Personality />
        <TokunouButton />
        <TraningPolicy />
        <AddButton />
        <SwitchingButton />
      </div>
    );
  }
}
export default Add;
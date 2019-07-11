import React from 'react';
import './App.css';
import ChangeButton from "./Add_or_Change/changeButton";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouButton from "./Add_or_Change/tokunoubutton"; 
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";
  
class Change extends React.Component {
  render() {
    return (
      <div id="wrap">
        <Year />
        <Name />
        <Position />
        <Personality />
        <TokunouButton />
        <TraningPolicy />
        <ChangeButton />
      </div>
    );
  }
}

export default Change;
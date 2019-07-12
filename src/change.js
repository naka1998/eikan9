import React from 'react';
import './App.css';
import ChangeButton from "./Add_or_Change/changeButton";
import Name from "./Add_or_Change/name";
import Personality from "./Add_or_Change/personality";
import Position from "./Add_or_Change/position";
import TokunouButton from "./Add_or_Change/tokunoubutton";
import TraningPolicy from "./Add_or_Change/traningpolicy";
import Year from "./Add_or_Change/year";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Change extends React.Component {
  render() {
    return (
      <Modal>
        <Year />
        <Name />
        <Position />
        <Personality />
        <TokunouButton />
        <TraningPolicy />
        <ChangeButton />
      </Modal>
    );
  }
}

export default Change;
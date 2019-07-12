import React from "react";
import "../App.css";

class AddButton extends React.Component {
  render() {
    return (
      <span>
        <button className="addButton">Add</button>
      </span>
    );
  }
}
class SwitchingButton extends React.Component {
  render() {
    return (
      <div>
        <button className="switchButton">Switch</button>
      </div>
    );
  }

}

class AddBar extends React.Component {
  render() {
    return (
      <footer id="addbar">
        <AddButton />
        <SwitchingButton />
      </footer>
    );
  }
}

export default AddBar;
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


class AddBar extends React.Component {
  render() {
    return (
      <footer id="addbar">
        <AddButton />
      </footer>
    );
  }
}

export default AddBar;
import React from "react";
import "../App.css";

class AddBar extends React.Component {
  render() {
    return (
      <footer id="addbar">
        <a href="/eikan9" className="addButton" onClick={this.props.writeJson}>追加</a>
      </footer>
    );
  }
}

export default AddBar;
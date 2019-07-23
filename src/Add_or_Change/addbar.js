import React from "react";
import "../App.css";

class AddBar extends React.Component {
  render() {
    return (
      <footer id="addbar">
        <input type="submit" className="addButton" onClick={this.props.writeJson} value="追加" />
      </footer>
    );
  }
}

export default AddBar;
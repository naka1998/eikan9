import React from "react";
import "../App.css";

class AddBar extends React.Component {
  render() {
    return (
      <footer id="addbar">
        <a href="/eikan9/main"
          className="addButton"
          onClick={this.props.writeJson}
        >
          {this.props.year ? "追加" : "年度未入力"}
        </a>
      </footer>
    );
  }
}

export default AddBar;
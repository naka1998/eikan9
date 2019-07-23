import React from 'react';
import "../App.css";

class TokunouDesc extends React.Component {
  renderdesc(i) {
    return (
      <li className="tokunouList"> {this.props.tokunou[i]}</li >
    );
  }
  render() {
    return (
      <ul className="tokunouUl">
        {this.props.descAry.map((i) => this.renderdesc(i))}
      </ul>
    );
  }
}

export default TokunouDesc;
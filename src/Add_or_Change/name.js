import React from 'react';
import '../App.css';

class Name extends React.Component {
  render() {
    return (
      <div className="nameDiv">
        <label>
          <span>名前</span>
          <input
            type="text"
            name="name"
            value={this.props.value}
            onChange={(e) => this.props.changeState(e, this.props.idNum)} />
        </label>
      </div>
    );
  }

}

export default Name;

import React from 'react';
import '../App.css';

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>
          <span>坝剝</span>
          <input type="text" name="name" value={this.props.value} onChange={(e) => this.props.changeState(e)} />
        </label>
      </div>
    );
  }

}

export default Name;

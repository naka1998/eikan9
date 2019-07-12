import React from 'react';
import '../App.css';

class Name extends React.Component {
  render() {
    return (
      <div>
        <label>
          <span>name:</span>
          <input type="text" required />
        </label>
      </div>
    );
  }

}

export default Name;

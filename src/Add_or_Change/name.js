import React from 'react';
class Name extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="nameForm">名前</label>
        <input type="text" name="nameForm" required />
      </div>
    );
  }

}

export default Name;

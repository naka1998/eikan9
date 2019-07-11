import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <select>
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
      </div>
    );
  }
}

export default Filter;
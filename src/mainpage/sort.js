import React from 'react';

class Sort extends React.Component {
  render() {
    return (
      <span>
        <select>
          <option value="0">年度順</option>
          <option value="1">ポジション順</option>
        </select>
      </span>
    );
  }
}

export default Sort;

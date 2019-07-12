import React from 'react';

class Sort extends React.Component {
  render() {
    return (
      <span id="sort">
        <select>
          <option value="0">年度順(昇順)</option>
          <option value="1">年度順(降順)</option>
          <option value="2">ポジション順(昇順)</option>
          <option value="3">ポジション順(降順)</option>
        </select>
      </span>
    );
  }
}

export default Sort;

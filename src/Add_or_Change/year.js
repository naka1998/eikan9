import React from 'react';

//  valueは後で、jsonの末尾(最新の追加データの年度にする)
class Year extends React.Component {
  render() {
    return (
      <div id="yearForm">
        <label>
          <input type="number" value="2019" />
          <span>年度選手追加</span>
        </label>
      </div>
    );
  }

}

export default Year;

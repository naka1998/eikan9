import React from 'react';

//  valueは後で、jsonの末尾(最新の追加データの年度にする)
class Year extends React.Component {
  render() {
    return (
      <div>
        <input type="number" value="2019" id="yearForm" name="yearForm"></input>
        <label htmlFor="yearForm">年度選手追加</label>
      </div>
    );
  }

}

export default Year;

import React from 'react';

//  valueは後で、jsonの末尾(最新の追加データの年度にする)
const Year = (props) => {
  return (
    <div id="yearForm">
      <label>
        <input
          type="number"
          name="year"
          value={props.value}
          onChange={props.changeYear} />
        <span>年度選手追加</span>
      </label>
    </div>
  )
}

export default Year;

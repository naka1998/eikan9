import React from 'react';

const Personality = (props) => {
  return (
    <div className="persDiv">
      <label>性格:
      <select
          name="pers"
          value={props.value}
          onChange={(e) => props.changeState(e, props.idNum)}>
          <option value="0">天才肌	</option>
          <option value="1">ごくふつう</option>
          <option value="2">お調子者</option>
          <option value="3">やんちゃ</option>
          <option value="4">クール</option>
          <option value="5">したたか</option>
          <option value="6">内気</option>
          <option value="7">熱血漢</option>
        </select>
      </label>
    </div >
  )
}

export default Personality;

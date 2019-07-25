import React from 'react';
import '../App.css';

const Name = (props) => {
  return (
    < div className="nameDiv" >
      <label>
        <span>名前</span>
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={(e) => props.changeState(e, props.idNum)} />
      </label>
    </div >
  )
}

export default Name;

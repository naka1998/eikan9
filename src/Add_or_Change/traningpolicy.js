import React from 'react';

const TraningPolicy = (props) => {
  return (
    <textarea
      name="policy"
      className="policyForm"
      value={props.value}
      placeholder="育成方針"
      onChange={(e) => props.changeState(e, props.idNum)}>
    </textarea>
  );
}

export default TraningPolicy;

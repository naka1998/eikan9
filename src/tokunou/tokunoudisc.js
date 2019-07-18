import React from 'react';
import "../App.css";

function makeAry(isPitcher, pIsChecked, fIsChecked, pToku, fToku) {
  let ary = isPitcher ? pIsChecked : fIsChecked;
  let tokunouAry = isPitcher ? pToku : fToku;
  let descAry = [];
  for (let i = 0; i <= ary.length; i++) {
    if (ary[i]) {
      descAry.push(tokunouAry[i]);
    }
  }
  return descAry;
}

class TokunouDesc extends React.Component {
  renderdesc(i) {
    return (
      <li className="tokunouList"> {i + ","}</li >
    );
  }
  render() {
    const descAry = makeAry(this.props.isPitcher, this.props.pitcherIsChecked, this.props.fielderIsChecked, this.props.pitcherTokunou, this.props.fielderTokunou);
    return (
      <ul className="tokunouUl">
        {descAry.map((i) => this.renderdesc(i))}
      </ul>
    );
  }
}

export default TokunouDesc;
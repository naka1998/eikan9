//  選手を個別に追加していくページ
import React from 'react';
import AddButton from "./addbutton"
import Name from "./name"
import Personality from "./personality"
import Position from "./position"
import SwitchingButton from "./switchingbutton"
import Tokunou from "./tokunou"
import TraningPolicy from "./traningpolicy"
import Year from "./year"

class Add extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Year />
          <Name />
          <Position />
          <Personality />
          <Tokunou />
          <TraningPolicy />
          <AddButton />
          <SwitchingButton />
        </form>
      </div>
    );
  }
}
export default Add;
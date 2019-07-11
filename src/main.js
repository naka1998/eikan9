import React from 'react';
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";


class Main extends React.Component {
  render() {
    return (
      <div id="wrap">
        <Sort />
        <Filter />
        <PlayerCard />
      </div>
    );
  }
}

export default Main;
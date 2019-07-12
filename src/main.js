import React from 'react';
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";

class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Sort id="sort" />
          <Filter id="filter" />
        </header>
        <div id="wrap">
          <div id="playerwrap">
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
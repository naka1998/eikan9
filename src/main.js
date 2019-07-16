import React from 'react';
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: 0,
      filter: { year1: "2017", year2: "2018", pos: [0, 1, 2], pers: [1, 6, 7] },
    };
  }
  render() {
    return (
      <div>
        <header>
          <Sort id="sort" sortValue={this.state.sort} />
          <Filter id="filter" filterValue={this.state.filter} />
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
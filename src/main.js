import React from 'react';
import Sort from "./mainpage/sort";
import Filter from "./mainpage/filter";
import PlayerCard from "./mainpage/player";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sort: 0,
      filter: {
        year1: "", year2: "",
        pos: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false },
        pers: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, }
      },
    };
    this.resetFilterState = this.resetFilterState.bind(this);
    this.changeYear1 = this.changeYear1.bind(this);
    this.changeYear2 = this.changeYear2.bind(this);
    this.changeSortState = this.changeSortState.bind(this);
    this.changePos = this.changePos.bind(this);
    this.changePers = this.changePers.bind(this);
  }
  changeYear1(e) {
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    copiedary.year1 = e.target.value;
    this.setState({
      filter: copiedary,
    });
  }

  changeYear2(e) {
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    copiedary.year2 = e.target.value;
    this.setState({
      filter: copiedary,
    });
  }
  changePos(e) {
    console.log(this.state.filter.pos);
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    const posnum = e.target;
    copiedary.pos[posnum.value] = !copiedary.pos[posnum.value];
    this.setState({
      filter: copiedary,
    });
  }
  changePers(e) {
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    const persnum = e.target;
    copiedary.pers[persnum.value] = !copiedary.pers[persnum.value];
    this.setState({
      filter: copiedary,
    });
  }
  resetFilterState() {
    const resetState = { year1: "", year2: "", pos: [], pers: [] };
    this.setState({ filter: resetState, });
  }
  changeSortState(e) {
    this.setState({ sort: e.target.value });
  }
  render() {
    return (
      <div>
        <header>
          <Sort id="sort" sortValue={this.state.sort} changeSortState={this.changeSortState} />
          <Filter id="filter" filterValue={this.state.filter} resetFilterState={this.resetFilterState} changeYear1={this.changeYear1} changeYear2={this.changeYear2} changePos={this.changePos} changePers={this.changePers} />
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
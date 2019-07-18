import React from 'react';
import data from "./player.json";
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
    this.changeYear = this.changeYear.bind(this);
    this.changeSortState = this.changeSortState.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  readJson() {
    //    data = JSON.parse(data);
    console.log(data);
    this.setState = { player: data, };
  }
  writeJson() {

  }
  changeYear(e) {
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    const name = e.target.name;
    copiedary[name] = e.target.value;
    this.setState({
      filter: copiedary,
    });
  }
  changeState(e) {
    const copiedary = JSON.parse(JSON.stringify(this.state.filter));
    const num = e.target;
    copiedary[num.name][num.value] = !copiedary[num.name][num.value];
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
  renderPlayercard() {
    return (
      <PlayerCard />
    );
  }
  render() {
    return (
      <div>
        <header>
          <Sort id="sort" key={1} sortValue={this.state.sort} changeSortState={this.changeSortState} />
          <Filter id="filter" key={2} filterValue={this.state.filter} resetFilterState={this.resetFilterState} changeYear={this.changeYear} changeState={this.changeState} />
        </header>
        <div id="wrap">
          <div id="playerwrap">
            {this.renderPlayercard
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
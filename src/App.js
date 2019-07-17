import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from "./main";
import AddSum from "./add_sum";
import Change from "./change";

const Nav = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/eikan9' component={Main} />
      <Route path='/eikan9/addsum' component={AddSum} />
      <Route path='/eikan9/change' component={Change} />
      <footer id="navbar">
        <button className="navcont"><Link to='/eikan9'>Main</Link></button>
        <button className="navcont"><Link to="/eikan9/addsum">Add</Link></button>
      </footer >
    </div >
  </BrowserRouter >
)

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //  将来的にはjsonから読み込んだものをstateに入れる
      player: [
        { id: "0", year: "2017", name: "銀次", pos1: "3", pos2: "4", pos3: "0", pers: "3", tokunou: [2, 3, 4, 18], policy: "自由記述" },
        { id: "1", year: "2018", name: "赤見内", pos1: "3", pos2: "6", pos3: "2", pers: "1", tokunou: [], policy: "自由記述" },
      ]
    };
  }
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./home";
import Main from "./main";
import AddSum from "./add_sum";

const Nav = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/addsum" component={AddSum} />
      <footer id="navbar">
        <div className="navcont">
          <NavLink activeClassName="activeNavCont" to="/main">
            ホーム
          </NavLink>
        </div>
        <div id="tatesen" />
        <div className="navcont">
          <NavLink activeClassName="activeNavCont" to="/addsum">
            追加
          </NavLink>
        </div>
      </footer>
    </div>
  </BrowserRouter>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;

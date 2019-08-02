import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from "./home";
import Main from "./main";
import AddSum from "./add_sum";

const Nav = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/eikan9/" component={Home} />
      <Route path="/eikan9/main" component={Main} />
      <Route path="/eikan9/addsum" component={AddSum} />
      <footer id="navbar">
        <div className="navcont">
          <NavLink activeClassName="activeNavCont" to="/eikan9/main">
            ホーム
          </NavLink>
        </div>
        <div id="tatesen" />
        <div className="navcont">
          <NavLink activeClassName="activeNavCont" to="/eikan9/addsum">
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

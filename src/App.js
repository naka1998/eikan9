import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Main from "./main";
import AddSum from "./add_sum";
import Change from "./change";

const Nav = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/eikan9/main' component={Main} />
      <Route path='/eikan9/addsum' component={AddSum} />
      <Route path='/eikan9/change' component={Change} />
      <footer id="navbar">
        <div className="navcont"><NavLink activeClassName="activeNavCont" to='/eikan9/main'>Main</NavLink></div>
        <div id="tatesen"></div>
        <div className="navcont"><NavLink activeClassName="activeNavCont" to="/eikan9/addsum">Add</NavLink></div>
      </footer >
    </div >
  </BrowserRouter >
)

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

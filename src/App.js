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
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default App;

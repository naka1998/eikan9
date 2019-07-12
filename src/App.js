import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from "./main";
import Add from "./add";
import AddSum from "./add_sum";
import Change from "./change";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Main} />
      <Route path='/add' component={Add} />
      <Route path='/addsum' component={AddSum} />
      <Route path='/change' component={Change} />
      <footer id="navbar">
        <button className="navcont"><Link to='/'>Main</Link></button>
        <button className="navcont"><Link to='/add'>Add</Link></button>
        <button className="navcont"><Link to="/addsum">AddSum</Link></button>
      </footer >
    </div >
  </BrowserRouter >
)

export default App;

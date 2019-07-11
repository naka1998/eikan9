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
      <ul id="navbar">
        <li className="navcont"><Link to='/'>Main</Link></li>
        <li className="navcont"><Link to='/add'>Add</Link></li>
        <li className="navcont"><Link to="/addsum">AddSum</Link></li>
      </ul>

      <Route exact path='/' component={Main} />
      <Route path='/add' component={Add} />
      <Route path='/addsum' component={AddSum} />
      <Route path='/change' component={Change} />
    </div>
  </BrowserRouter>
)

export default App;

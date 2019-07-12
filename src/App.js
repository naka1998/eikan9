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
      <Route exact path='/eikan9' component={Main} />
      <Route path='/eikan9/add' component={Add} />
      <Route path='/eikan9/addsum' component={AddSum} />
      <Route path='/eikan9/change' component={Change} />
      <footer id="navbar">
        <button className="navcont"><Link to='/eikan9'>Main</Link></button>
        <button className="navcont"><Link to='/eikan9/add'>Add</Link></button>
        <button className="navcont"><Link to="/eikan9/addsum">AddSum</Link></button>
      </footer >
    </div >
  </BrowserRouter >
)

export default App;

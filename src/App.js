import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {NavLink, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>It's an</h3>
          <h1>API Party</h1>
        </header>
        
        
        <ul className="navLinks">
          <li>
            <NavLink to="/github">Github API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" render={() => <h1>Hello Github!</h1>}/>
          <Route render={() => (            //default route b/c no path
            <p>Click a link to start!</p>
          )}  />
        </Switch>
      </div>
    );
  }
}

export default App;

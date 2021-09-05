import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Users from "./components/Users.js";
import Search from "./components/Search.js";
import Alert from "./components/Alert.js";
import User from './components/User';
import axios from 'axios';
import { useState , useContext } from 'react';
import About from './pages/About.js';
import NotFound from './components/NotFound';
import Home from './pages/Home';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/user/:login' component={User} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
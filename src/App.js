import React from 'react';

import LandingPage from './components/LandingPage';
import About from './components/About';

import './App.css';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      
      <Switch>

        <Route exact path = '/' component = {LandingPage} />

        <Route path = '/about' component = {About} />

      </Switch>
      
    </div>
  );
}


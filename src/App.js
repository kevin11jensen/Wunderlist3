import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path = '/' component = {LandingPage} />

        <Route path = '/about' component = {About} />

      </Switch>
      <Footer />
    </div>
  );
}


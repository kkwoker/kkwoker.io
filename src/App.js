import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import Songs from './pages/Songs';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    if (process.env.NODE_ENV === 'production') {
      return (
        <ComingSoon />
      )
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path='/' render={() => (
            <Home />
          )} />
          <Route exact={true} path='/songs' render={() => (
            <Songs />
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

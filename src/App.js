import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Home from './pages/Home';
import Songs from './pages/Songs';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact={true} path='/' render={() => (
            <div>
              <Home />
            </div>
          )} />
          <Route exact={true} path='/songs' render={() => (
            <div>
              <Songs />
            </div>
          )} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { AppStyle, AppContainerStyle } from './Styles';
import Home from '../pages/Home';
import ComingSoon from '../pages/ComingSoon';
import Songs from '../pages/Songs';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    if (process.env.NODE_ENV === 'production') {
      return (
        <ComingSoon />
      )
    }
    return (
      <AppStyle>
        <BrowserRouter>
          <AppContainerStyle>
            <div className="App">
              <Route exact={true} path='/' render={() => (
                <Home />
              )} />
              <Route exact={true} path='/music' render={() => (
                <Songs />
              )} />
            </div>
          </AppContainerStyle>
        </BrowserRouter>
      </AppStyle>
    );
  }
}

export default App;

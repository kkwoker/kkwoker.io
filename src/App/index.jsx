import React, { Component } from 'react';
import { AppStyle, AppContainerStyle } from './Styles';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Songs from '../pages/Songs';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppStyle>
        <BrowserRouter>
          <AppContainerStyle>
            <div className="App">
              <Switch>
                <Route exact={true} path='/' render={() => (
                  <Home />
                )} />
                <Route exact={true} path='/music' render={() => (
                  <Songs />
                )} />
                <Route exact={true} path='/blog' render={() => (
                  <Blog />
                )} />
                <Route exact={true} path='/blog/*' render={() => (
                  <BlogPost />
                )} />
                <Route exact={true} path='*' render={() => (
                  <NotFound />
                )} />
              </Switch>
            </div>
          </AppContainerStyle>
        </BrowserRouter>
      </AppStyle>
    );
  }
}

export default App;

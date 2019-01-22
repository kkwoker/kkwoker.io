import React, { Component } from 'react';
import { AppStyle, AppContainerStyle } from './Styles';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Songs from '../pages/Songs';
import Map from '../pages/Map';
import NotFound from '../pages/NotFound';
import BingoPage from '../pages/BingoPage';
import ResumePage from '../pages/ResumePage';
import Articles from '../pages/Articles';
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
                <Route exact={true} path='/vancouver' render={() => (
                  <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                )} />
                <Route exact={true} path='/blog/*' render={() => (
                  <BlogPost />
                )} />
                <Route exact={true} path='/bingo' render={() => (
                  <BingoPage />
                )} />
                <Route exact={true} path='/articles' render={() => (
                  <Articles />
                )} />
                <Route exact={true} path='/resume' render={() => (
                  <ResumePage />
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

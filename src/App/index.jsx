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
                <Route exact path='/' render={() => (
                  <Home />
                )} />
                <Route exact path='/music' render={() => (
                  <Songs />
                )} />
                <Route exact path='/blog' render={() => (
                  <Blog />
                )} />
                <Route exact path='/vancouver' render={() => (
                  <Map
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                )} />
                <Route exact path='/blog/*' render={() => (
                  <BlogPost />
                )} />
                <Route exact path='/bingo' render={() => (
                  <BingoPage />
                )} />
                <Route exact path='/articles' render={() => (
                  <Articles />
                )} />
                <Route exact path='/resume' render={() => (
                  <ResumePage />
                )} />
                <Route exact path='*' render={() => (
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

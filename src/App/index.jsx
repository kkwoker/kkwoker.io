import React, { Component } from 'react';
import { AppStyle, AppContainerStyle } from './Styles';
import Home from '../pages/Home';
import BlogPost from '../pages/BlogPost';
import Songs from '../pages/Songs';
import Map from '../pages/Map';
import NotFound from '../pages/NotFound';
import BingoPage from '../pages/BingoPage';
import ResumePage from '../pages/ResumePage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
import Articles from '../pages/Articles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TableOfContents from '../components/TableOfContents';

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
                <Route exact path='/blog' render={() => (
                  <BlogPage />
                )} />
                <Route exact path='/contact' render={() => (
                  <ContactPage />
                )} />
                <Route exact path='/checkout-demo' render={() => (
                  <div>
                    <h1> Demo instructions: </h1>
                    <ol> 1. Go to <a target="_blank" rel='noopener noreferrer' href='https://www.telus.com/en/bc/shop/home/'> telus.com/shop/home </a> </ol>
                    <ol> 2. Choose some items to add to the cart </ol>
                    <ol> 3. Enter in an address "768 Seymour St" and "10d" as the unit number </ol>
                    <ol> 4. Proceed into Review Cart </ol>
                    <ol> 5. View cart details and checkout! </ol>
                    <ol> 6. Be amazed at the work accomplished. </ol>

                    <h2> Cleaner demo instructions coming soon!</h2>
                    <div>
                      <a href='/'> Home </a>
                    </div>
                  </div>
                )} />
                <Route exact path='*' render={() => (
                  <NotFound />
                )} />
              </Switch>
            </div>
            {/*<Route exact path={'/blog'} component={TableOfContents} />*/}
          </AppContainerStyle>
        </BrowserRouter>
      </AppStyle>
    );
  }
}

export default App;

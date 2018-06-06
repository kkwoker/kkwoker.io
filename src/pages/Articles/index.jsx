import React from 'react';
import { BackgroundImage, ArticleList } from './Styles';

class Articles extends React.Component {
  render() {
    return (
      <div>
        <BackgroundImage />
            <h1>Articles that have englightend me</h1>
        <ArticleList>
          <a href="https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/">
            The care and feeding of software engineers (or, why engineers are grumpy)
          </a>
          (Show a link preview)

        </ArticleList>

        <a href='/'>Return home</a>
      </div>
    );
  }
}

export default Articles;

import React from 'react';
import { BackgroundImage, ArticleList, ArticleCard } from './Styles';

class Articles extends React.Component {
  render() {
    return (
      <div>
        <BackgroundImage />
        <h1>Articles that have englightend me</h1>

        <ArticleList>

          <div className='card-section'>
            <ArticleCard>
              <a href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <img src='https://www.w3schools.com/w3css/img_5terre.jpg' />
                <div className='container'>
                  <h4>Title</h4>
                  <p>
                    The care and feeding of software engineers (or, why engineers are grumpy)
                  </p>
                </div>
              </a>
            </ArticleCard>
          </div>
          <div className='card-section'>
            <ArticleCard>
              <a href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <img src='https://www.w3schools.com/w3css/img_5terre.jpg' />
                <div className='container'>
                  <h4>Title</h4>
                  <p>
                    The care and feeding of software engineers (or, why engineers are grumpy)
                  </p>
                </div>
              </a>
            </ArticleCard>
          </div>
          <div className='card-section'>
            <ArticleCard>
              <a href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <img src='https://www.w3schools.com/w3css/img_5terre.jpg' />
                <div className='container'>
                  <h4>Title</h4>
                  <p>
                    The care and feeding of software engineers (or, why engineers are grumpy)
                  </p>
                </div>
              </a>
            </ArticleCard>
          </div>
          <div className='card-section'>
            <ArticleCard>
              <a href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <img src='https://www.w3schools.com/w3css/img_5terre.jpg' />
                <div className='container'>
                  <h4>Title</h4>
                  <p>
                    The care and feeding of software engineers (or, why engineers are grumpy)
                  </p>
                </div>
              </a>
            </ArticleCard>
          </div>
          <div className='card-section'>
            <ArticleCard>
              <a href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <img src='https://www.w3schools.com/w3css/img_5terre.jpg' />
                <div className='container'>
                  <h4>Title</h4>
                  <p>
                    The care and feeding of software engineers (or, why engineers are grumpy)
                  </p>
                </div>
              </a>
            </ArticleCard>
          </div>

        </ArticleList>

        <a href='/'>Return home</a>
      </div>
    );
  }
}

export default Articles;

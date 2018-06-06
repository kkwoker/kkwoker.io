import React from 'react';
import { PageStyle, BackgroundImage, ArticleList, ArticleCard } from './Styles';
import ImageLoader from '../../components/ImageLoader';

// To add more articles, copy and paste the div 'card-section'

class Articles extends React.Component {

  randomColor() {
    // light blue, light red, light purple,
    const colors = ['#71c0ff', '#f79b94', '#f3afff', '#97f19a', '#f9ef92', '#ffca7b'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  render() {
    return (
      <PageStyle>
        <BackgroundImage />
        <h1>Articles that have englightend me</h1>

        <h2> June 2018 </h2>
        <ArticleList>
          <div className='card-section'>
            <ArticleCard>
              <a
                target='_blank'
                href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <ImageLoader src='placeholder' color={this.randomColor()}>
                  <div className='container'>
                    <h4> The care and feeding of software engineers (or, why engineers are grumpy) </h4>
                    <p> by Nicholas C. Zakas </p>
                  </div>
                </ImageLoader>
              </a>
            </ArticleCard>
          </div>
        </ArticleList>

        <h3 className='beginning'>
          <h3>.</h3>
          <h3>.</h3>
          <h3>.</h3>
          And then there were article postings...
        </h3>

        {/* This is an example of how to post more articles */}
        {/* <h2> May 2018 </h2>
        <ArticleList>
          <div className='card-section'>
            <ArticleCard>
              <a
                target='_blank'
                href='https://www.nczonline.net/blog/2012/06/12/the-care-and-feeding-of-software-engineers-or-why-engineers-are-grumpy/'>
                <ImageLoader src='placeholder'>
                  <div className='container'>
                    <h4> The care and feeding of software engineers (or, why engineers are grumpy) </h4>
                    <p> by Nicholas C. Zakas </p>
                  </div>
                </ImageLoader>
              </a>
            </ArticleCard>
          </div>
        </ArticleList> */}


        <a href='/'>Return home</a>
      </PageStyle>
    );
  }
}

export default Articles;

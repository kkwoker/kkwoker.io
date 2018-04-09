import React from 'react';
import { BlogListStyle } from './Styles';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog.</h1>
        <h2>Coming soon...</h2>

        <BlogListStyle>
          <div className='blog-item'>Item1</div>
          <div className='blog-item'>Item2</div>
          <div className='blog-item'>Item3</div>
          <div className='blog-item'>Item4</div>
          <div className='blog-item'>Item5</div>
          <div className='blog-item'>Item6</div>
        </BlogListStyle>

        <a href='/'>Return home</a>
      </div>
    );
  }
}

export default Blog;

import React from 'react';
import { BlogListStyle } from './Styles';
import posts from '../../assets/posts';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog.</h1>
        <h2>Coming soon...</h2>

        <BlogListStyle>
          { posts.map(blog =>
            <a href={`blog/${blog.routeKey}`}>
              <div className='blog-item'>
                { blog.title }
              </div>
            </a>
          )}
        </BlogListStyle>

        <a href='/'>Return home</a>
      </div>
    );
  }
}

export default Blog;

import React from 'react';
import { BlogListStyle } from './Styles';
import posts from '../../assets/posts';

// Not the best way of doing this...
const publishedPosts = posts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse();

class Blog extends React.Component {

  blogList() {
    return publishedPosts.map(post =>
      <a href={`blog/${post.routeKey}`} key={post.routeKey}>
        <div className='blog-item'>
          <div>{ post.title }</div>
          <sub>{ new Date(post.date).toDateString() }</sub>
        </div>
      </a>
    );
  }

  render() {
    return (
      <div>
        <h1> Blog. </h1>
        <h2> A simple space for quick jots... </h2>

        <BlogListStyle>
          { this.blogList() }
        </BlogListStyle>

        <br />
        <div>
          <a href='/'> Return home </a>
        </div>
      </div>
    );
  }
}

export default Blog;

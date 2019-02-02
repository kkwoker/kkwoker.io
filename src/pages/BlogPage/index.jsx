// The Social Page is intended as an infinite scroll social media posting, all about ME.

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ImageLoader from '../../components/ImageLoader';
import TableOfContents from '../../components/TableOfContents';
import {
  BlogPostsList,
  ImageStyle,
  ContentStyle,
  BlogPageDiv,
  BlogPost
} from './Styles';
import posts from '../../assets/posts';

// Not the best way of doing this...
const publishedPosts = posts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse();

class BlogPage extends React.PureComponent {

  postPreviews() {
    return publishedPosts.map(post =>
      <BlogPost key={post.routeKey}>
        <div className='divider'>...</div>
        <br />
        <a href={`blog/${post.routeKey}`} key={post.routeKey}>
          <h2 id={post.routeKey}> { post.title } </h2>
          {
            (post.imageSrc) ?
              <ImageLoader
                styleComponent={ImageStyle}
                src={post.imageSrc}
                alt={post.imageAlt} /> :
              <div className='image'>{post.imageFiller}</div>
          }
          <ContentStyle>
            <sub> { new Date(post.date).toDateString() } </sub>
            <div className='overflow-ellipsis' dangerouslySetInnerHTML={{__html: post.html}} />
          </ContentStyle>
        </a>
      </BlogPost>
    );
  }

  render() {
    return (
      <BlogPageDiv>
        <BlogPostsList>
          { this.postPreviews() }
        </BlogPostsList>
        <br />
        <div className='home-link'>
          <a href='/'> Return home </a>
        </div>
      </BlogPageDiv>
    )
  }
}

export default BlogPage;

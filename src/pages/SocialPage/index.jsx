// The Social Page is intended as an infinite scroll social media posting, all about ME.

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ImageLoader from '../../components/ImageLoader';
import TableOfContents from '../../components/TableOfContents';
import {
  BlogPostsList,
  ImageStyle,
  ContentStyle,
  SocialPageDiv
} from './Styles';
import posts from '../../assets/posts';

// Not the best way of doing this...
const publishedPosts = posts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse();

class SocialPage extends React.PureComponent {

  postPreviews() {
    return publishedPosts.map(post =>
      <div>
        <div className='divider'>...</div>
        <br />
        <a href={`blog/${post.routeKey}`} key={post.routeKey}>
          <h2 id={post.routeKey}> { post.title } </h2>
          <ImageStyle>
            {
              (post.imageSrc) ?
                <ImageLoader src={post.imageSrc} alt={post.imageAlt} /> :
                <div className='image'>{post.imageFiller}</div>
            }
          </ImageStyle>
          <ContentStyle>
            <sub> { new Date(post.date).toDateString() } </sub>
            <div className='overflow-ellipsis' dangerouslySetInnerHTML={{__html: post.html}} />
          </ContentStyle>
        </a>
      </div>
    );
  }

  render() {
    return (
      <SocialPageDiv>
        <BlogPostsList>
          { this.postPreviews() }
        </BlogPostsList>
        <br />
        <div className='home-link'>
          <a href='/'> Return home </a>
        </div>
      </SocialPageDiv>
    )
  }
}

export default SocialPage;

// The Social Page is intended as an infinite scroll social media posting, all about ME.

import React from 'react'
import ImageLoader from '../../components/ImageLoader'
import Header from '../../components/Header'
import {
  BlogPostsList,
  ImageStyle,
  ContentStyle,
  BlogPageDiv,
  BlogPost,
  PostTitle
} from './Styles'
import posts from '../../assets/posts'

// Not the best way of doing this...
const publishedPosts = posts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse()

class BlogPage extends React.PureComponent {
  postPreviews () {
    return publishedPosts.map(post =>
      <BlogPost key={post.routeKey}>
        <div className='divider'>...</div>
        <br />
        <a href={`blog/${post.routeKey}`} key={post.routeKey}>
          {
            (post.imageSrc)
              ? <ImageLoader
                id={post.routeKey}
                styleComponent={ImageStyle}
                src={post.imageSrc}
                alt={post.imageAlt} />
              : <div id={post.routeKey} className='image'>{post.imageFiller}</div>
          }
          <br />
          <PostTitle> { post.title } </PostTitle>
          <br />
          <ContentStyle>
            <sub> { new Date(post.date).toDateString() } </sub>
            <div className='overflow-ellipsis' dangerouslySetInnerHTML={{ __html: post.html }} />
          </ContentStyle>
        </a>
      </BlogPost>
    )
  }

  render () {
    return (
      <div>
        <Header />
        Coming soon!
      </div>
    )
    return (
      <BlogPageDiv>
        <Header />
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

export default BlogPage

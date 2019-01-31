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

const catImage = 'https://media.altpress.com/uploads/2018/07/Hello_Kitty.jpg';

// This blog post array could be merged with the BlogPost array
const blogs = [
  {
    heading: 'Introducing Baxter the Cat!',
    imageSrc: catImage,
    imageAlt: 'hellokitty',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
];

class SocialPage extends React.PureComponent {

  postPreviews() {
    return blogs.map(post => (
      <div>
        <div className='divider'>...</div>
        <a href=''>
          <h2> { post.heading } </h2>
          <ImageStyle>
            <ImageLoader src={post.imageSrc} alt={post.imageAlt} />
          </ImageStyle>
          <ContentStyle>
            <p> { post.content } </p>
            <div>...Continue reading</div>
          </ContentStyle>
        </a>
      </div>
    ));
  }

  render() {
    return (
      <SocialPageDiv>
        <BlogPostsList>

          { this.postPreviews() }
          { this.postPreviews() }
          { this.postPreviews() }
          { this.postPreviews() }
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

// The Social Page is intended as an infinite scroll social media posting, all about ME.

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ImageLoader from '../../components/ImageLoader';
import TableOfContents from '../../components/TableOfContents';
import {
  SocialPageDiv,
  ImageStyle,
  ContentStyle
} from './Styles';

const catImage = 'https://media.altpress.com/uploads/2018/07/Hello_Kitty.jpg';
class SocialPage extends React.PureComponent {
  render() {
    return (
      <div>
        <SocialPageDiv>
          <div>
            <div className='divider'>...</div>
            <h2> Introducing Baxter the Cat! </h2>
            <ImageStyle>
              <ImageLoader src={catImage} alt={'hellokitty'} />
            </ImageStyle>
            <ContentStyle>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </ContentStyle>
          </div>

          <div>
            <div className='divider'>...</div>
            <h2> Introducing Baxter the Cat! </h2>
            <ImageStyle>
              <ImageLoader src={catImage} alt={'hellokitty'} />
            </ImageStyle>
            <ContentStyle>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </ContentStyle>
          </div>

          <div>
            <div className='divider'>...</div>
            <h2> Introducing Baxter the Cat! </h2>
            <ImageStyle>
              <ImageLoader src={catImage} alt={'hellokitty'} />
            </ImageStyle>
            <ContentStyle>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </ContentStyle>
          </div>

          <div>
            <div className='divider'>...</div>
            <h2> Introducing Baxter the Cat! </h2>
            <ImageStyle>
              <ImageLoader src={catImage} alt={'hellokitty'} />
            </ImageStyle>
            <ContentStyle>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </ContentStyle>
          </div>
        </SocialPageDiv>
      </div>
    )
  }
}

export default SocialPage;

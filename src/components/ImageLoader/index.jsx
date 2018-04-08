import React from 'react';
import { ImageLoaderStyle } from './Styles';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }

  onLoad(e) {
    this.setState({ loaded: true })
  }

  render() {
    const { song } = this.props;
    const { loaded } = this.state;
    return (
      <ImageLoaderStyle>
        <img
          className={`image ${loaded ? 'fade-in' : 'display-none'}`}
          onLoad={this.onLoad.bind(this)}
          src={song.imgSrc}
          alt={song.title} />
        <div className={`image placeholder ${loaded ? 'display-none' : ''}`} />
        <div className={`${loaded ? 'fade-in' : 'hidden'}`}>
          <span> { song.title } </span>
          <span> { song.artist } </span>
          <span> { song.year } </span>
        </div>
      </ImageLoaderStyle>
    )
  }
}

export default ImageLoader;

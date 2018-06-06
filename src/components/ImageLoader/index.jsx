import React from 'react';
import PropTypes from 'prop-types';
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
    const { src, alt, children, color } = this.props;
    const { loaded } = this.state;
    return (
      <ImageLoaderStyle color={color}>
        <img
          className={`image ${loaded ? 'fade-in' : 'display-none'}`}
          onLoad={this.onLoad.bind(this)}
          src={src}
          alt={alt} />
        <div className={`image placeholder ${loaded ? 'display-none' : ''}`} />
          { children }
      </ImageLoaderStyle>
    )
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,

  // The color of the preloading background
  color: PropTypes.color
};

export default ImageLoader;

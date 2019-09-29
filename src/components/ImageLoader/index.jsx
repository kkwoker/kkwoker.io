import React from 'react';
import PropTypes from 'prop-types';
import { ImageLoaderStyle, DefaultImageStyle } from './Styles';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false }
  }

  onLoad(e) {
    this.setState({ loaded: true })
  }

  render() {
    const { src, alt, children, placeholderColor, id } = this.props;
    const { loaded } = this.state;

    return (
      <ImageLoaderStyle color={placeholderColor}>
        <this.props.styleComponent>
          <img className={`image ${loaded ? 'fade-in' : 'display-none'}`}
            id={id}
            onLoad={this.onLoad.bind(this)}
            src={src}
            alt={alt} />
          <div className={`image placeholder ${loaded ? 'display-none' : ''}`} />
            { children }
        </this.props.styleComponent>
      </ImageLoaderStyle>
    )
  }
}

ImageLoader.defaultProps = {
  styleComponent: DefaultImageStyle,
  placeholderColor: 'grey'
}

ImageLoader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,

  // styleComponent is used to determine the size of the placeholder image.
  // styleComponent is a style-component class that renders the responsive size css
  styleComponent: PropTypes.ReactNode,

  // The color of the preloading background
  placeholderColor: PropTypes.string
};

export default ImageLoader;

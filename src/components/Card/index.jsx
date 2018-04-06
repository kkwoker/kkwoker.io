import React from 'react';

class Card extends React.Component {

  render() {
    const { imgSrc } = this.props;
    return (
      <div>
        NAME
        <img src={imgSrc} />
      </div>
    )
  }
}

export default Card;
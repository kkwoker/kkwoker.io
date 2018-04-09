import React from 'react';
import {
  BioStyle,
  HomeStyle,
  HeaderCardStyle
} from './Styles';

const kinnanFilteredImg = 'https://pbs.twimg.com/profile_images/983127371497615361/d6CPdT72_400x400.jpg';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loadedImg: false }
  }

  onLoad(e) {
    this.setState({ loadedImg: true })
  }

  render() {
    const { loadedImg } = this.state;
    return (
      <HomeStyle>
        <HeaderCardStyle>
          <img
            className={`profile-image ${loadedImg ? 'fade-in' : 'display-none'}`}
            src={kinnanFilteredImg}
            alt='profile of Kinnan Kwok'
            onLoad={this.onLoad.bind(this)} />
          <div className={`profile-image ${loadedImg ? 'display-none' : ''}`} />

          <div>
            <h1> Kinnan Kwok </h1>
            <h2> Software Developer </h2>
          </div>
        </HeaderCardStyle>
        <BioStyle>
          <p>
            I am a computer science student at SFU and a software developer at TELUS digital.
          </p>
          <p>
            Some of my projects include  e-commerce applications such as
            checkout and fullfilment at TELUS.com.
          </p>
          <p>
            I also enjoy talking about mathematics and finding proofs in logic puzzles
          </p>
          <p>
            Outside of work, I enjoy hiking, climbing, and snowboarding.
          </p>
          <p>
            Check out some of the <a href="music" >music</a> I listen to.
          </p>
        </BioStyle>
      </HomeStyle>
    );
  }
}

export default Home;

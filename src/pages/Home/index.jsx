import React from 'react';
import {
  BioStyle,
  HomeStyle,
  HeaderCardStyle,
  ContactStyle
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
          <div className={`profile-image ${loadedImg ? 'display-none' : ''}`}>
            <div className='loader' />
          </div>

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
            Some of my projects include e-commerce applications such as checkout and fullfilment at TELUS.com.
          </p>
          <p>
            I also enjoy talking about mathematics and finding proofs in logic puzzles
          </p>
          <p>
            Outside of work, I enjoy hiking, climbing, and snowboarding.
          </p>
          <p>
            Check out some of the <a href="music"> music</a> I listen to.
          </p>
          <p>
            I just started a list of <a href="articles"> articles</a> that I have found enlightening.
          </p>
          {/* <p>
            Here's my <a href="blog"> blog </a>.
          </p> */}

          <br />

          {/* <h4> Current enthusiasms </h4>
          <p> <strong> Jun 5th, 2018: </strong> <a href="/blog/haskell-as-a-functional-programming-language">Haskell as a functional programming language</a> </p>
          <p> <strong> May 11th, 2018: </strong> What does Data Science mean? </p>
          <p> <strong> April 20th, 2018: </strong> Recognizing NP complete problems </p>
          <p> <strong> March 15th, 2018: </strong> Network Flows in algorithm design </p>
          <p> <strong> Feb 27th, 2018: </strong> Dynamic Programming fundamentals </p>
          <p> <strong> Nov 7th, 2018: </strong> Graph theory </p>
          <p> <strong> Sept 30th, 2018: </strong> Counting and problem solving </p> */}

          <ContactStyle>
            <div>
              Contact me at&nbsp;
              <a href="mailto:kkwoker@gmail.com">
                kkwoker@gmail.com
              </a>
            </div>
            <div>Last Updated: Jun 5th, 2018</div>
          </ContactStyle>
        </BioStyle>
      </HomeStyle>
    );
  }
}

export default Home;

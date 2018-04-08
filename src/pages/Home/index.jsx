import React from 'react';
import {
  BioStyle,
  HomeStyle,
  HeaderCardStyle
} from './Styles';

const kinnanFilteredImg = 'https://lh3.googleusercontent.com/py65pQqDlPjStj-gdkX0OYtjekheIQFV_wJF7_qMeSEz-335y7EwZt-qqa6yrHqAob_HQSjCE8GBIWVMmVVoX8SM1czfcBALUOqr85UJfGcp9DYuHFAdP4Ek30JT4DvxAtyy80KRWaovtM5chgbQCmoaSaLWyCHUulV2YOPqyGpUNm5Z3mtrFRPQEJXUOCFj5DoIvZsd5_p1tCbhKHeZWd9MOpGYTxMQiJJl1xw8JouMoM7lQ6n1ZXTwatyTF8TmiNVW1qXp0skYkoS_O1xZkkGhqTX2a_SJLHiP51n8H20oqhPfyaFNruI5LTVfUyYJIZlDsOSr58n1uisXtS1ROKyH3or91hdUPdKgNGiJJvomj6Ge_F7dNyIHj-JKffK91ie24dct8l08_HxQfjt3zpZ03xkvfqyums5cNDZ-C11Nz-k6NRg4oRMOYsSBnNkUWF-P4abfzR2jH2wrR0qIq70UNUs-xeD8b3bigPoP0TmnjetqvdEb1P-0WvE8adR81eRiedXkqgTJaGMkpcUCMFqKz7TgXaJql-6cUGFdsXyU8eXpG6YN230sXu93bzLsHk0Dj4EXlK1OBJFJBr0Q80tO1hXz02ocYQwvoh8=w453-h481-no'

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
            Here's some of the <a href="music" >music</a> I listen to.
          </p>
          <div>
            TWITTER FEED. What am I talking about? What am I up to?
          </div>
        </BioStyle>
      </HomeStyle>
    );
  }
}

export default Home;

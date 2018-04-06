import React from 'react';

const kinnanSnowImgSrc = 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/26994021_10157030665366729_2062782440780858684_n.jpg?_nc_cat=0&oh=2a7cdf083e37b5c2d070ed514e95e0ae&oe=5B72708C';
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1> Kinnan Kwok </h1>
        <img className='profile' src={kinnanSnowImgSrc} />
        <p>
          A computer science student at SFU and a software developer at TELUS.
        </p>
        <p>
          Some of my projects include  e-commerce applications such as
          checkout and fullfilment at TELUS.com.
        </p>
        <p>
          I also enjoy talking about mathematics and finding proofs in logic puzzles
        </p>
        <p>
          Outside of work, I enjoy hiking, climbing, snowboarding, and gymnastics
          I listen to alternative and indie pop music. <a>Here's some of my favourites.</a>
          <a href="songs" >Songs</a>
        </p>
        <p>
          Life stories: Here's about the time I....
        </p>
        <p>
          pretending to rock band is my LSD
        </p>

        <p>
          Most of my friends know that I am a big fan of Game of Thrones, hence the profile picture
        </p>
      </div>
    );
  }
}

export default Home;

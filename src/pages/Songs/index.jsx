import React from 'react';
import { SongsListStyle, SongStyle } from './Styles';
import songData from '../../assets/fav-songs.json';
import ImageLoader from '../../components/ImageLoader';

const githubLink = 'https://github.com/kkwoker/kkwoker.io/tree/master/src/components/ImageLoader';
class Songs extends React.Component {
  render() {
    return (
      <div>
        <h1>Music curation</h1>
        <h2>This list is a work in progress...</h2>
        <SongsListStyle>
          {
            songData.map((song, i) => {
              return (
                <SongStyle>
                  <ImageLoader src={song.imgSrc} alt={song.title} />
                    <p> { song.title } </p>
                    <p> { song.artist } </p>
                    <p> { song.year } </p>
                </SongStyle>
              )
            })
          }
        </SongsListStyle>
        <div>
          <sub>
            This is a demonstration of ImageLoader,
            a React class that implements fadeIn,
            includes placeholders before load,
            and is modularized.
          </sub>
        </div>
        <div>
          <sub>
            Check it out <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
            > here</a>.
          </sub>
        </div>
        <br />
        <div className='home-link'>
          <a href='/'> Return home </a>
        </div>
      </div>
    )
  }
}

export default Songs;

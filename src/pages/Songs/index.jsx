import React from 'react';
import { SongsListStyle, SongStyle } from './Styles';
import songData from '../../assets/fav-songs.json';

class Songs extends React.Component {
  render() {
    return (
      <SongsListStyle>
        {
          songData.map((song) => {
            return (
              <SongStyle>
                <img src={song.imgSrc} alt={song.title} />
                <div>
                  <span> { song.title } </span>
                  <span> { song.artist } </span>
                  <span> { song.year } </span>
                </div>
              </SongStyle>
            )
          })
        }
      </SongsListStyle>
    )
  }
}

export default Songs;

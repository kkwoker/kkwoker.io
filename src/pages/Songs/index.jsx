import React from 'react';
import { SongsListStyle, SongStyle } from './Styles';
import songData from '../../assets/fav-songs.json';
import ImageLoader from '../../components/ImageLoader';

class Songs extends React.Component {
  render() {
    return (
      <SongsListStyle>
        {
          songData.map((song, i) => {
            return (
              <SongStyle>
                <ImageLoader song={song}/>
              </SongStyle>
            )
          })
        }
      </SongsListStyle>
    )
  }
}

export default Songs;

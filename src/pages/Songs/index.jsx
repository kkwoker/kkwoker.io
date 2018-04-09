import React from 'react';
import { SongsListStyle, SongStyle } from './Styles';
import songData from '../../assets/fav-songs.json';
import ImageLoader from '../../components/ImageLoader';

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
                  <ImageLoader song={song}/>
                </SongStyle>
              )
            })
          }
        </SongsListStyle>
      </div>
    )
  }
}

export default Songs;

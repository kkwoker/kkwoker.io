import React from 'react';
import songData from '../../assets/fav-songs.json';

class Songs extends React.Component {
  render() {
    return (
      <div>
        Songs
        {
          songData.map((song) => {
            return (
              <div>
                { song.title }
                { song.artist }
                { song.year }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Songs;

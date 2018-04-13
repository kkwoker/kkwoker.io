import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {
  render() {
    return (
      <div>
        <h1>Vancouver</h1>
        <h2>My Home</h2>

        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lng: -123.11934, lat: 49.24966 }}
        >
          <Marker position={{ lng: -123.11934, lat: 49.24966 }} />
        </GoogleMap>

      </div>
    )
  }
}

export default withScriptjs(withGoogleMap(Map));

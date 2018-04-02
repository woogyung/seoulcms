import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  
  render () {
    
    const markers=this.props.markers || []
    return (
      <div>
        <GoogleMap
          defaultZoom={this.props.defaultZoom}
          defaultCenter={this.props.defaultCenter}
        >
          {markers.map((marker,index) => (
            <Marker {...marker} />
            )
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(Map)

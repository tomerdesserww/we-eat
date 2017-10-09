import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'


const RestaurantsMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.markers.map((marker, index) => (
        <Marker
          key={marker.id}
          {...marker}
        />
      ))}
    </GoogleMap>
  ))
export default RestaurantsMap;

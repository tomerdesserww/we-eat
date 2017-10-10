import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react'

const RestaurantsGoogleMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap defaultZoom={14} defaultCenter={{ lng: 34.7735413, lat: 32.0804841 }}>
      {props.markers.map((marker) => (
        <Marker key={marker.id} {...marker} />
      ))}
    </GoogleMap>
  ))

export default RestaurantsGoogleMap;

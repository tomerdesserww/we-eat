import React from 'react';
import RestaurantsGoogleMap from './restaurantsGoogleMap';
import { restaurantToMarkerMapper } from '../../services/restaurantToMarkerMapper';

export default function RestaurantsMap ({ restaurants }) {
  const markers = restaurants.map(restaurant => restaurantToMarkerMapper.map(restaurant));
  return (
    <div>
      <RestaurantsGoogleMap
        googleMapURL='http://maps.googleapis.com/maps/api/js?key=AIzaSyBweDdXKekd2us6Ehkywk_p1UBpLEaJXkI&v=3.exp&libraries=geometry,drawing,places'
        loadingElement={<div style={{ height: `100%` }}/>}
        containerElement={<div style={{ height: `400px` }}/>}
        mapElement={<div style={{ height: `100%` }}/>}
        markers={markers}
      />
    </div>
  );
}

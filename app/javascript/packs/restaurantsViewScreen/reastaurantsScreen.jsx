  import React from 'react';
import Restaurants from './restaurants';
import UpdateableSelectBox from '../updateableSelectBox';
import filtersProvider from '../../services/filtersProvider';
import { restaurantsProvider } from '../../services/restaurantsProvider';
  import RestaurantsMap from './restaurantsMap';

export default class RestaurantsScreen extends React.Component {
  state = {
    restaurants: [],
    filtered: [],
    rating: 0,
    cuisine: 'all',
    maximumDeliveryTime: 'all'
  };

  setRestaurants = (restaurants) => {
    this.setState({ restaurants }, this.filter);
  };

  componentWillMount () {
    restaurantsProvider.get('/restaurants')
      .then(this.setRestaurants)
      .catch(console.error);
  }

  filter = () => {
    const filtered = [ ...this.state.restaurants ].filter(restaurant => {
      var isRatingEligible = restaurant.restaurant_reviews_metadatum.avarage_score >= parseInt(this.state.rating);
      var isCuisineEligible = this.state.cuisine == 'all' || this.state.cuisine == restaurant.cuisine.name;
      var isDeliveryTimeEligible = this.state.maximumDeliveryTime == 'all' || this.state.maximumDeliveryTime >= restaurant.delivery_sla_in_minutes
      return isRatingEligible && isCuisineEligible && isDeliveryTimeEligible;
    });

    this.setState({ filtered });
  }

  updateFilter = (filterToUpdate) => {
    this.setState(filterToUpdate, this.filter);
  }

  render () {
    const {
      filtered,
    } = this.state;
    const markers = filtered.map(this.restaurantToMarker);

    return (
      <div>
        {
          filtersProvider.provide().map((filterData) => {
            var filterName = Object.keys(filterData)[0];
            return (<UpdateableSelectBox filterChange={this.updateFilter} filterName={filterName} values={filterData[filterName]} key={filterName}/>)
        })}
        <Restaurants restaurants={filtered} />
        <RestaurantsMap
          googleMapURL='http://maps.googleapis.com/maps/api/js?key=AIzaSyBweDdXKekd2us6Ehkywk_p1UBpLEaJXkI&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={markers}
        />
      </div>
    );
  }

  restaurantToMarker(restaurant) {
    const marker = {
      id: restaurant.id,
      position: {
        lat: restaurant.restaurant_reviews_metadatum.restaurant_location_lat,
        lng: restaurant.restaurant_reviews_metadatum.restaurant_location_lng
      },
      text: restaurant.name,
    };

    return marker;
  }
}

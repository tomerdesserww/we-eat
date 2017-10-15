import React from 'react';
import Restaurants from './restaurants';
import { dataProvider } from '../../services/DataProvider';
import SelectionFilters from './selectionFilters';
import RestaurantsGoogleMap from './restaurantsMap';

export default class RestaurantsScreen extends React.Component {
  state = {
    restaurants: [],
    filtered: [],
    rating: 0,
    cuisine: 'all',
    maximumDeliveryTime: 'all',
  };

  setRestaurants = (restaurants) => {
    this.setState({ restaurants }, this.filter);
  };

  componentWillMount () {
    dataProvider.get('/restaurants')
      .then(this.setRestaurants)
      .catch(console.error);
  }

  filter = () => {
    const filtered = [...this.state.restaurants].filter(restaurant => {
      var isRatingEligible = restaurant.restaurant_reviews_metadatum.avarage_score >= parseInt(this.state.rating);
      var isCuisineEligible = this.state.cuisine == 'all' || this.state.cuisine == restaurant.cuisine.name;
      var isDeliveryTimeEligible = this.state.maximumDeliveryTime == 'all' || this.state.maximumDeliveryTime >= restaurant.delivery_sla_in_minutes;
      return isRatingEligible && isCuisineEligible && isDeliveryTimeEligible;
    });

    this.setState({ filtered });
  };

  updateFilter = (filterToUpdate) => {
    this.setState(filterToUpdate, this.filter);
  };

  render () {
    return (
      <div>
        <SelectionFilters updateFilter={this.updateFilter}/>
        <Restaurants restaurants={this.state.filtered}/>
        <RestaurantsGoogleMap restaurants={this.state.filtered}/>
      </div>
    );
  }
}

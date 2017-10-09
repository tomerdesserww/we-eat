import React from 'react';
import Restaurants from './restaurants';
import UpdateableSelectBox from '../updateableSelectBox';
import filtersProvider from '../../services/filtersProvider';
import { restaurantsProvider } from '../../services/restaurantsProvider';

export default class RestaurantsScreen extends React.Component {
  state = {
    restaurants: [],
    filtered: [],
    rating: 0,
    cuisine: 'all'
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
      return isRatingEligible && isCuisineEligible;
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

    return (
      <div>
        {
          filtersProvider.provide().map((filterData) => {
            var filterName = Object.keys(filterData)[0];
            return (<UpdateableSelectBox filterChange={this.updateFilter} filterName={filterName} values={filterData[filterName]} key={filterName}/>)
        })}
        <Restaurants restaurants={filtered} />
      </div>
    );
  }
}

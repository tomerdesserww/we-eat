import React from 'react';
import Header from './header';
import Restaurants from './restaurants';
import UpdateableSelectBox from './updateableSelectBox';
import filtersProvider from '../services/filtersProvider';

function get (url) {
  return fetch(url)
    .then(response => response.json());
}

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
    get('/restaurants')
      .then(this.setRestaurants)
      .catch(console.error);
  }

  filter = () => {
    const filtered = [ ...this.state.restaurants ].filter(restaurant => {
      var isRatingEligible = restaurant.restaurant_reviews_metadatum.avarage_score >= this.state.rating;
      var isCuisineEligible = this.state.cuisine == 'all' || this.state.cuisine == restaurant.cuisine.name;
      return isRatingEligible && isCuisineEligible;
    });

    this.setState({ filtered });
  }

  updateFilter = (a) => {
    this.setState(a, this.filter);
  }

  render () {
    const {
      filtered,
    } = this.state;

    return (
      <div>
        <Header/>
        {
          filtersProvider.provide().map((filterData) => {
            var filterName = Object.keys(filterData)[0];
            return (<UpdateableSelectBox filterChange={this.updateFilter} filterName={filterName} values={filterData[filterName]}/>)
        })}
        <Restaurants restaurants={filtered} />
      </div>
    );
  }
}

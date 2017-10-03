import React from 'react';
import Header from './header';
import Restaurants from './Restaurants';

function get (url) {
  return fetch(url)
    .then(response => response.json());
}

export default class Layout extends React.Component {
  state = {
    restaurants: [],
    filtered: [],
    rating: 0,
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
      return restaurant.restaurant_reviews_metadatum.avarage_score >= this.state.rating;
    });

    this.setState({ filtered });
  }

  updateFilter = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    }, this.filter);
  }

  render () {
    const {
      filtered,
    } = this.state;

    return (
      <div>
        <Header/>
        <select onChange={this.updateFilter} name="rating">
          <option value="0">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
        <Restaurants restaurants={filtered} />
      </div>
    );
  }
}

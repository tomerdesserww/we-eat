import React from 'react';
import { dataProvider } from '../../services/DataProvider';
import { cuisineToSymbolMapper } from '../../services/cuisineToSymbolMapper';
import RestaurantReviews from './restaurantReviews';

export default class RestaurantScreen extends React.Component {
  state = {
    restaurant: {
      restaurant_reviews_metadatum: {
        avarage_score: 0,
      },
      cuisine: {
        name: '',
      },
      reviews: [],
    }
  };

  setRestaurants = (restaurant) => {
    this.setState({ restaurant });
  };

  componentWillMount () {
    dataProvider.get('/restaurants/' + this.props.match.params.name)
      .then(this.setRestaurants)
      .catch(console.error);
  }

  updateReviewsList = (review) => {
    const restaurant = this.state.restaurant;
    restaurant.reviews = [...restaurant.reviews, review];
    this.setState({ restaurant });
  };

  render () {
    var restaurant = this.state.restaurant;
    return (
      <div className='restaurant-screen'>
        <h1>{restaurant.name}</h1>
        <h2>{restaurant.address}</h2>
        <span className='three-stars'
              style={{ width: 14 * restaurant.restaurant_reviews_metadatum.avarage_score }}/>
        <span className='cuisine-font cuisine-icon'>{cuisineToSymbolMapper.map(restaurant.cuisine.name)}</span>
        {restaurant.does_accept_10bis &&
        <div><span className='ten-bis-icon'></span></div>
        }
        <RestaurantReviews updateReviewList={this.updateReviewsList} reviews={restaurant.reviews} restaurantId={restaurant.id}/>
      </div>
    );
  }
}

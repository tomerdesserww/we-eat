import React from 'react';
import { restaurantsProvider } from '../../services/restaurantsProvider';
import { cuisineToSymbolMapper } from '../../services/cuisineToSymbolMapper';
import ReviewLine from './reviewLine';
import AddReview from './addReview';

export default class RestaurantScreen extends React.Component {
  state = {
    restaurant: {
      restaurant_reviews_metadatum: {
        avarage_score: 0,
      },
      cuisine: {
        name: '',
      },
      reviews: []
    },
    shouldShowAddReview: false
  };
  setRestaurants = (restaurant) => {
    this.setState({ restaurant });
  };

  componentWillMount () {
    restaurantsProvider.get('/restaurants/' + this.props.match.params.name)
      .then(this.setRestaurants)
      .catch(console.error);
  }

  toggleAddReviewSection = () => {
    this.setState({shouldShowAddReview: !this.state.shouldShowAddReview});
  }

  updateReviewsList = (review) => {
    const restaurant = this.state.restaurant;

    this.setState({
      restaurant: {
        ...restaurant,
        reviews: [...restaurant.reviews, review]
      },
      shouldShowAddReview: false
    })
  }

  render () {
    var restaurant = this.state.restaurant;
    return (
      <div>
        <span>{restaurant.name}</span>
        <span className='three-stars'
              style={{ width: 14 * restaurant.restaurant_reviews_metadatum.avarage_score }}/>
        <span className='cuisine-font'>{cuisineToSymbolMapper.map(restaurant.cuisine.name)}</span>
        { restaurant.does_accept_10bis &&
        <span className='ten-bis-icon'></span>
        }
        { restaurant.reviews.map(item => <ReviewLine review={item} key={item.reviewer}/>) }
        <button onClick={this.toggleAddReviewSection}>+</button>
        { this.state.shouldShowAddReview &&
          <AddReview restaurantId={restaurant.id} reviewAdded={this.updateReviewsList}/>
        }
      </div>
    );
  }
}

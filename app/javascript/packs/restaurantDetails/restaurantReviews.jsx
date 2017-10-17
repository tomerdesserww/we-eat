import React from 'react';
import { dataProvider } from '../../services/DataProvider';
import { cuisineToSymbolMapper } from '../../services/cuisineToSymbolMapper';
import ReviewLine from './reviewLine';
import AddReview from './addReview';

export default class RestaurantReviews extends React.Component {
  state = {
    shouldShowAddReview: false
  }

  toggleAddReviewSection = () => {
    this.setState({ shouldShowAddReview: !this.state.shouldShowAddReview });
  };

  updateReviewsList = (review) => {
    this.props.updateReviewList(review);
    this.toggleAddReviewSection();
  }

  render () {
    return (
      <div className='reviews'>
        {this.props.reviews.map(item => <ReviewLine review={item} key={item.reviewer}/>)}
        <button onClick={this.toggleAddReviewSection}>Add Review</button>
        {this.state.shouldShowAddReview &&
        <AddReview restaurantId={this.props.restaurantId} reviewAdded={this.updateReviewsList}/>
        }
      </div>
    );
  }
}

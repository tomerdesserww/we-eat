import React from 'react';

export default class Restaurant extends React.Component {
  render () {
    var restaurant = this.props.restaurant;
    return (
      <div>
        <span>{restaurant.name}</span>
        <span className='three-stars' style={{ width: 14 * restaurant.restaurant_reviews_metadatum.avarage_score }}/>
        {restaurant.does_accept_10bis &&
        <span className='ten-bis-icon'></span>
        }
        <p>&#33;</p>
      </div>
    );
  }
}

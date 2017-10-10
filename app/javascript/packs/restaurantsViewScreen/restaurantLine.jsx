import React from 'react';
import { cuisineToSymbolMapper } from '../../services/cuisineToSymbolMapper';
import { Link } from 'react-router-dom';

export default function RestaurantLine({restaurant}) {
  return (
    <div>
      <Link to={'/restaurant/' + restaurant.name}>
        <span>{restaurant.name}</span>
        <span className='three-stars' style={{ width: 14 * restaurant.restaurant_reviews_metadatum.avarage_score }}/>
        <span className='cuisine-font'>{cuisineToSymbolMapper.map(restaurant.cuisine.name)}</span>
        {restaurant.does_accept_10bis &&
        <span className='ten-bis-icon'></span>
        }
      </Link><br/>
    </div>
  );
}

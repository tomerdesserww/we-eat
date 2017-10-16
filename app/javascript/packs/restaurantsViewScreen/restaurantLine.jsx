import React from 'react';
import { cuisineToSymbolMapper } from '../../services/cuisineToSymbolMapper';
import { Link } from 'react-router-dom';

export default function RestaurantLine({restaurant}) {
  return (
    <div>
      <Link className='restaurant-line' to={'/restaurant/' + restaurant.name}>
        <div className='restaurant-line-item restaurant-line-icon' >
          <img className='restaurant-icon' src={restaurant.logo}/>
        </div>
        <div className='restaurant-line-item restaurant-line-details'>
          <div className='restaurant-name'>{restaurant.name}</div>
          <div className='restaurant-address'>{restaurant.address}</div>
          <span className='three-stars' style={{ width: 14 * restaurant.restaurant_reviews_metadatum.avarage_score }}/>
          <span className='cuisine-font'>{cuisineToSymbolMapper.map(restaurant.cuisine.name)}</span>
        </div>
        {restaurant.does_accept_10bis &&
        <div className=' restaurant-line-item ten-bis-icon restaurant-line-icon'></div>
        }
      </Link><br/>
    </div>
  );
}

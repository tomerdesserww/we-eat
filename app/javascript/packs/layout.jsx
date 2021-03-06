import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RestaurantsScreen from './restaurantsViewScreen/reastaurantsScreen';
import CreateRestaurantScreen from './createRestaurantScreen';
import Header from './header/header';
import RestaurantScreen from './restaurantDetails/restaurantScreen';

export default function Layout () {
  return (
    <div>
      <BrowserRouter>
        <div className="app-container">
          <Header/>
          <Route exact path='/' component={RestaurantsScreen}/>
          <Route exact path='/create' component={CreateRestaurantScreen}/>
          <Route exact path='/restaurant/:name' component={RestaurantScreen}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

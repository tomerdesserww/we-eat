import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RestaurantsScreen from './restaurantsViewScreen/reastaurantsScreen';
import CreateRestaurantScreen from './createRestaurantScreen';
import Header from './header';

export default class Layout extends React.Component {

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={RestaurantsScreen}/>
            <Route exact path='/create' component={CreateRestaurantScreen}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

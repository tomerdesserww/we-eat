import React from 'react';
import BrowserRouter from 'react-router-dom'
import RestaurantsScreen from './reastaurantsScreen';

export default class Layout extends React.Component {

  render () {
    return (
      <div>
        <RestaurantsScreen />
      </div>
    );
  }
}

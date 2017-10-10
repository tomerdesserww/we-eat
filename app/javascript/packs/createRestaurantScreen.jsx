import React from 'react';
import { restaurantsProvider } from '../services/restaurantsProvider';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

export default class CreateRestaurantScreen extends React.Component {
  state = {
    name: '',
    address: '',
    cuisine: '',
    does_accept_10bis: true,
    delivery_sla_in_minutes: 0
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateAddress = (address) =>{
    this.setState({ 'address': address });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    geocodeByAddress(this.state.address).then(results => {
    const location = results[0].geometry.location;
    this.setState({lat: location.lat(), lng: location.lng()});
    restaurantsProvider.post('/restaurants', this.state).then(
      response => this.props.history.push('/'),
      error => console.log('An error occurred.', error)
    )}
  )};

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange}/>
        </label><br />
        <label>
          Address:
          <PlacesAutocomplete inputProps={{ onChange: this.updateAddress, value: this.state.address, placeholder: 'Address..', name: 'address'}}
          />
        </label><br />
        <label>
          Cuisine:
        <select onChange={this.handleChange} name="cuisine" defaultValue='default'>
          <option disabled='disabled' value='default'>Please Select</option>
          <option value='burger'>Burger</option>
          <option value='sushi'>Sushi</option>
          <option value='bakery'>Bakery</option>
        </select>
        </label><br />
        <label>
          Accepts 10Bis?
          <select onChange={this.handleChange} name="does_accept_10bis">
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </label><br />
        <label>
          Delivery SLA:
          <input type="select" name="delivery_sla_in_minutes" onChange={this.handleChange}/>
        </label><br />

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

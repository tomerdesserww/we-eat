import React from 'react';
function post (url, data) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(
      response => function(){},
      error => console.log('An error occurred.', error)
    );
}
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

  handleSubmit = (event) => {
    event.preventDefault();
    post('/restaurants', this.state)
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange}/>
        </label><br />
        <label>
          Address:
          <input type="text" name="address" onChange={this.handleChange}/>
        </label><br />
        <label>
          Cuisine:
        <select onChange={this.handleChange} name="cuisine" value='default'>
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

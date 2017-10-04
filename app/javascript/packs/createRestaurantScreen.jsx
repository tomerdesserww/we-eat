import React from 'react';

export default class CreateRestaurantScreen extends React.Component {
  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="rest_name" onChange={this.handleChange}/>
        </label>
        <label>
          Address:
          <input type="text" name="rest_address" onChange={this.handleChange}/>
        </label>
        <input type="checkbox" name="does_accepts_ten_bis" onChange={this.handleChange}/> Accept 10Bis
        <label>
          Cuisine
        <select onChange={this.handleChange} name="rest_cuisine">
          <option value='burger'>Burger</option>
          <option value='sushi'>Sushi</option>
          <option value='bakery'>Bakery</option>
        </select>
        </label>
        <label>
          Delivery SLA:
          <input type="select" name="rest_delivery_sla" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

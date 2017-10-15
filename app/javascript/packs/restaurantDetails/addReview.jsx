import React from 'react';
import { dataProvider } from '../../services/DataProvider';

export default class AddReview extends React.Component {
  state ={
    restaurant_id: this.props.restaurantId
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    dataProvider.post('/review', this.state).then(
      response => this.props.reviewAdded(response),
      error => console.log('An error occurred.', error)
    );
  };

  render () {
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" name="reviewer" onChange={this.handleChange}/>
      </label><br />
      <label>
        Rate:
        <select onChange={this.handleChange} name="rating" defaultValue='default'>
          <option disabled='disabled' value='default'>Please Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </label><br />
      <label>
        Comment:
        <input type="text" name="comment" onChange={this.handleChange}/>
      </label><br />

      <input type="submit" value="Submit"/>
    </form>
    )
  }
}

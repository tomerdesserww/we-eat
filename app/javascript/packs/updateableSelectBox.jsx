import React from 'react';
import cuisineToSymbolMapper from '../services/cuisineToSymbolMapper';

export default class UpdateableSelectBox extends React.Component {
  handleChange = (e) => {
    this.props.filterChange({
      [e.target.name]: e.target.value,
    });
  };

  render () {
    var options = this.props.values.map((selectLine) => {
      var value = Object.keys(selectLine)[0];
      return (<option value={value}>{selectLine[value]}</option>);
    });

    return (
      <select onChange={this.handleChange} name={this.props.filterName}>
        {options}
      </select>
    );
  }
}

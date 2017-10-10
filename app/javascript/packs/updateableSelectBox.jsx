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
      return (<option value={value} key={value}>{selectLine[value]}</option>);
    });
    var label = this.props.filterName.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })

    return (
      <div>
        <label>{label}</label>
        <select onChange={this.handleChange} name={this.props.filterName}>
          {options}
        </select>
      </div>
    );
  }
}

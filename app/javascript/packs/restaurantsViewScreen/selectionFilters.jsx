import React from 'react';
import UpdateableSelectBox from './updateableSelectBox';
import { filtersProvider } from '../../services/filtersProvider';
import { dataProvider } from '../../services/DataProvider';

export default class SelectionFilters extends React.Component{
  state = {
    filters: []
  }

  componentWillMount(){
    let filters = filtersProvider.provide();
    dataProvider.get('/cuisine').then((cuisines) => {
      var cuisineFilters = cuisines.map((cuisine) => {
        return {[cuisine.name]: cuisine.name}
      })
      filters.push({cuisine: cuisineFilters})
      this.setState({filters})
    })
  }

  render(){
    return (
      <div>
        {
          this.state.filters.map((filterData) => {
            let filterName = Object.keys(filterData)[0];
            return (<UpdateableSelectBox filterChange={this.props.updateFilter}
                                         filterName={filterName}
                                         values={filterData[filterName]}
                                         key={filterName}/>);
          })}
      </div>
    );
  }

}

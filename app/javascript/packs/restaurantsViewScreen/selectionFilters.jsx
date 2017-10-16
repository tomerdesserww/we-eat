import React from 'react';
import UpdateableSelectBox from './updateableSelectBox';
import { filtersProvider } from '../../services/filtersProvider';

export default class SelectionFilters extends React.Component{
  state = {
    filters: []
  }

  componentWillMount(){
    filtersProvider.provide().then((filters) => {
      this.setState({filters})
    });
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

import React from 'react';
import UpdateableSelectBox from './updateableSelectBox';
import filtersProvider from '../../services/filtersProvider';

export default function SelectionFilters ({updateFilter}) {
  return (
    <div>
      {
        filtersProvider.provide().map((filterData) => {
          var filterName = Object.keys(filterData)[0];
          return (<UpdateableSelectBox filterChange={updateFilter} filterName={filterName}
                                       values={filterData[filterName]} key={filterName}/>);
        })}
    </div>
  );
}

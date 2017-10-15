import { dataProvider } from './DataProvider';

export class FiltersProvider {
  provide () {
    var filters = [
      {
        rating: [
          { 0: 'All' },
          { 1: '1+' },
          { 2: '2+' },
          { 3: '3' },
        ],
      },
      {
        deliveryTime: [
          { all: 'Any time' },
          { 15: '15 Minutes' },
          { 30: '30 Minutes' },
          { 60: '60 Minutes' },
          { 120: '120 Minutes' },
        ],
      },
    ];

    return dataProvider.get('/cuisine').then((cuisines) => {
      var cuisineFilters = cuisines.map((cuisine) => {
        return {[cuisine.name]: cuisine.name}
      })
      filters.push({cuisine: cuisineFilters})
      return filters;
    })
  }
}

export let filtersProvider = new FiltersProvider();

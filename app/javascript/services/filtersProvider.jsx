export class FiltersProvider {
  provide () {
    return [
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
  }
}

export let filtersProvider = new FiltersProvider();

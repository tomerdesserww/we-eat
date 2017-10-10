export default class cuisineToSymbolMapper {
  static provide () {
    return [
      {
        rating: [
          { 0: 'All' },
          { 1: '1+' },
          { 2: '2+' },
          { 3: '3' }
        ]
      },
      {
        cuisine: [
          { all: 'All' },
          { burger: 'Burger' },
          { sushi: 'Sushi' },
          { bakery: 'Bakery' }
        ]
      },
      {
        maximumDeliveryTime: [
          {all: 'Any time'},
          {15: '15 Minutes'},
          {60: '60 Minutes'},
          {120: '120 Minutes'}
        ]
      }
    ];
  }
}

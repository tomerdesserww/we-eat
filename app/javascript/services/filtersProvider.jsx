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
      }
    ]
  }
}

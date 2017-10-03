export default class cuisineToSymbolMapper{
  static cuisineSymboles = {
    bakery: 'Q',
    burger: 'A',
    sushi: 'I'
  };

  static map(name) {
    return this.cuisineSymboles[name];
  }
}

export class CuisineToSymbolMapper{
  cuisineSymboles = {
    bakery: 'Q',
    burger: 'A',
    sushi: 'I'
  };

  map(name){
    return this.cuisineSymboles[name];
  }
}

export let cuisineToSymbolMapper = new CuisineToSymbolMapper();

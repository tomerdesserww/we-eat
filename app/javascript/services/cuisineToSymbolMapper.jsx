export class CuisineToSymbolMapper{
  cuisineSymboles = {
    Asian: 'g',
    Burger: 'A',
    Coffee: 'b',
    Fish: 'k',
    HomeFood: '*',
    Hummus: ',',
    Indian: '#',
    Italian: '5',
    Meat: 'U',
    Mexican: '8',
    Pizza: 'L',
    'Salad/Sandwich': 'Q',
    Sushi: 'I',
    Vegan: '$',
  };

  map(name){
    return this.cuisineSymboles[name];
  }
}

export let cuisineToSymbolMapper = new CuisineToSymbolMapper();

export class RestaurantToMarkerMapper{
  map(restaurant) {
    const marker = {
      id: restaurant.id,
      position: {
        lat: restaurant.latitude,
        lng: restaurant.longitude,
      },
      text: restaurant.name,
    };

    return marker;
  }
}

export let restaurantToMarkerMapper = new RestaurantToMarkerMapper();

export class RestaurantToMarkerMapper{
  map(restaurant) {
    const marker = {
      id: restaurant.id,
      position: {
        lat: restaurant.restaurant_reviews_metadatum.restaurant_location_lat,
        lng: restaurant.restaurant_reviews_metadatum.restaurant_location_lng,
      },
      text: restaurant.name,
    };

    return marker;
  }
}

export let restaurantToMarkerMapper = new RestaurantToMarkerMapper();

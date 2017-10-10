class AddLoctionToRestaurantMetadata < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurant_reviews_metadata, :restaurant_location_lng, :float
    add_column :restaurant_reviews_metadata, :restaurant_location_lat, :float
  end
end

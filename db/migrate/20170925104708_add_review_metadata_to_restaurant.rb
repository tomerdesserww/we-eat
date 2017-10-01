class AddReviewMetadataToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurant_reviews_metadata, :restaurant_id, :integer, references: :restaurants
  end
end

class AddReviewToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :restaurant_id, :integer, references: :restaurants
  end
end

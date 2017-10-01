class CreateRestaurantReviewsMetadata < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurant_reviews_metadata do |t|
      t.integer :reviews_count
      t.float :avarage_score

      t.timestamps
    end
  end
end

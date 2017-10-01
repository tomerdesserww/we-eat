class AddCuisineToRestaurant < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :cuisine_id, :integer, references: :cuisines
  end
end

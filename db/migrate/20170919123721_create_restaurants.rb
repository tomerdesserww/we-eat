class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.boolean :does_accept_10bis
      t.integer :delivery_sla_in_minutes

      t.timestamps
    end
  end
end

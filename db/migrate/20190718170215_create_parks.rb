class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :location
      t.string :activities

      t.timestamps
    end
  end
end

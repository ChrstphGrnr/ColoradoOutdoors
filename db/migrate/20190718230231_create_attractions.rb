class CreateAttractions < ActiveRecord::Migration[5.2]
  def change
    create_table :attractions do |t|
      t.string :name
      t.string :location, :array => true
      t.string :description
      t.string :images, :array => true
      t.string :type

      t.timestamps
    end
  end
end

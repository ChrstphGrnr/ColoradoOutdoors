class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :activities
  belongs_to_many: :users

end

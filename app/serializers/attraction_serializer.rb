class AttractionSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :description, :images
  # has_many :comments
end

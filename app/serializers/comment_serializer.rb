class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :name, :attraction_id
  belongs_to :attraction
end

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :name
  belongs_to :attraction
end

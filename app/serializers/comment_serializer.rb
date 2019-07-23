class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username
  belongs_to :attraction
end

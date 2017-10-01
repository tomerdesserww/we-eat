class ReviewSerializer < ActiveModel::Serializer
  attributes :reviewer, :rating, :comment
end

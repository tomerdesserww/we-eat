class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :does_accept_10bis, :delivery_sla_in_minutes, :cuisine, :restaurant_reviews_metadatum, :reviews
end

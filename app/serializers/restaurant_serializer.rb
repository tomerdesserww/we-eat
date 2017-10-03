class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :address, :does_accept_10bis, :delivery_sla_in_minutes, :cuisine, :restaurant_reviews_metadatum
end

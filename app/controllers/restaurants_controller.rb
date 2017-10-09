class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def show
    render json: Restaurant.find_by_name(params.require(:id))
  end

  def create
    cuisine = Cuisine.find_by_name(params.require(:cuisine))
    restaurant = Restaurant.create!(name: params.require(:name),
                          address: params.require(:address),
                          does_accept_10bis: params.require(:does_accept_10bis),
                          delivery_sla_in_minutes: params.require(:delivery_sla_in_minutes),
                          cuisine_id: cuisine.id)
    render json: restaurant
  end

  def update
    render json: Restaurant.find(params.require(:id)).update(params.permit(:name, :address, :does_accept_10bis, :delivery_sla_in_minutes))
  end
end

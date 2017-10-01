class CuisineController < ApplicationController
  def index
    render json: Cuisine.all
  end

  def create
    render json: Cuisine.create(name: params.require(:name))
  end
end

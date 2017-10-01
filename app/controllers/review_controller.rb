class ReviewController < ApplicationController
  def show
    Review.find(request.require(:id))
  end

  def create
    render json: Review.create!(reviewer: params.require(:reviewer),
                  rating: params.require(:rating),
                  comment: params.require(:comment),
                  restaurant_id: params.require(:restaurant_id))
  end

  def index
    render json: Review.all
  end
end

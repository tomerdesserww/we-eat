class Review < ApplicationRecord
  after_create :update_average_rating
  belongs_to :restaurant

  validates :reviewer, :rating, :comment, presence: true
  validates :rating, inclusion: { in: [0, 1, 2, 3] }

  def update_average_rating
    reviews_metadata = restaurant.restaurant_reviews_metadatum
    avarageRating = (reviews_metadata.reviews_count * reviews_metadata.avarage_score + rating) / (reviews_metadata.reviews_count + 1)
    restaurant.restaurant_reviews_metadatum.update(reviews_count: reviews_metadata.reviews_count + 1, avarage_score: avarageRating)
  end
end

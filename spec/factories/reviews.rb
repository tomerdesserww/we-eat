FactoryGirl.define do
  factory :review do
    reviewer 'rev1'
    rating 3
    comment 'comment long so very long comment 1'
    restaurant { create(:restaurant) }
  end

  trait :invalid_rating do
    rating 4
  end

  trait :without_restaurant do
    restaurant {}
  end
end
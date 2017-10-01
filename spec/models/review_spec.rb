require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'create' do
    context 'when succeed' do
      subject { FactoryGirl.create(:review) }
      it 'should update average review accordingly' do

        expect(subject.restaurant.restaurant_reviews_metadatum.avarage_score).to eql(3.0)
      end
    end
  end

  describe 'create' do
    context 'when rating value is invalid' do
      it 'raise error' do
        FactoryGirl.create(:restaurant)

        expect { FactoryGirl.create(:review, :invalid_rating) }.to raise_error
      end
    end
  end

  describe 'create' do
    context 'when no matching restaurant for review' do
      it 'should throw' do
        expect { FactoryGirl.create(:review, :without_restaurant) }.to raise_error
      end
    end
  end
end
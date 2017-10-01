Rails.application.routes.draw do
  resources :cuisine, :restaurants, :review

  get '(*path)', to: 'application#index'
end

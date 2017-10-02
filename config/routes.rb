Rails.application.routes.draw do
  resources :cuisine, :restaurants, :review

  root 'application#index'
end

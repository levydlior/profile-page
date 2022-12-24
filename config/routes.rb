Rails.application.routes.draw do
  resources :users

  
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
  
  # Defines the root path route ("/")
  # root "articles#index"
end

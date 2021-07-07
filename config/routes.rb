Rails.application.routes.draw do

  
  resources :tables do
    resources :seats do
      resources :guests
    end
  end

  # resources :seats
  # resources :tables
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

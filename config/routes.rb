Rails.application.routes.draw do

  
  resources :tables do
    resources :seats do
      resources :guests
    end
  end

  get '/guests', to: 'guests#index_of_guests'
  get 'table/guests', to: 'tables#guests_at_table'

  # resources :seats
  # resources :tables
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/random_quote', to: 'quotes#random'
  get '/random_icon', to: 'icons#random'
end

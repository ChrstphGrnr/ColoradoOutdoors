Rails.application.routes.draw do
  resources :comments
  namespace :api do
    namespace :v1 do 
      resources :attractions
    end 
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
	devise_for :user, controllers: { omniauth_callbacks: 'users/omniauth_callbacks', registrations: "users/registrations" }
	resources :users do
   		resources :profiles do
   			resources :reviews, only: [:new, :create]
		end
	end
 	root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

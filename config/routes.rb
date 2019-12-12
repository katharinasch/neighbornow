Rails.application.routes.draw do
  	devise_for :user, controllers: { omniauth_callbacks: 'users/omniauth_callbacks', registrations: "users/registrations" }
	resources :users do
   		resource :profile do
   			resources :reviews, only: [:new, :create]
		end
	end
	resources :user_steps
	root to: "home#index"
end

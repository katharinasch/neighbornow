Rails.application.routes.draw do
	devise_for :user, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }


  	# devise_scope :user do
  		#delete 'sign_out', to: 'devise/sessions#destroy'
	#end
	resources :profiles
 	root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

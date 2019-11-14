Rails.application.routes.draw do
	devise_for :user, controllers: { omniauth_callbacks: user_facebook_omniauth_callback_path }
  	#devise_scope :user do
  		#delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
	#end
	root 'home#index'
	resources :profiles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

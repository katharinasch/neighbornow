Rails.application.routes.draw do
	devise_for :users
	get 'persons/profile'
# After the user has logged in, he will be redirected to ser_root_path if this exists.
# If not, user will be redirected to root_path. For this purpose root should be defined.
	root to: "home#index"

# However this means that after logging in, the user will be redirected to the homepage, which makes not much sence.
# It is better to also define a user_root as follows
	get 'persons/profile', as: 'current_user'
	get 'persons/logout'
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

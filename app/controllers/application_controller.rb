class ApplicationController < ActionController::Base

	before_action :configure_permitted_parameters, if: :devise_controller?

	protected

	def configure_permitted_parameters
		devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :street, :house_number, :city, :zip_code])
		devise_parameter_sanitizer.permit(:sign_in, keys: [:login, :email, :password, :remember_me]) 
	end

end
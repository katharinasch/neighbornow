class UserStepsController < ApplicationController
	include Wicked::Wizard
	steps :address


	def show
	  @user = current_user
	  render_wizard
	end


	def update
	  @user = current_user
	  @user.update!(user_params)
	  render_wizard @user
	end

	private

	def user_params
    	params.require(:user).permit(:email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :street, :house_number, :city, :zip_code)
  	end

	def redirect_to_finish_wizard(options = nil, params = nil)
		redirect_to new_user_profile_path(current_user)
	end

end

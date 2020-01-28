class UserStepsController < ApplicationController
	respond_to :html, :js
	include Wicked::Wizard
	steps :address



	def show
	  @user = current_user || User.from_omniauth(request.env["omniauth.auth"])
	  render_wizard
	end


	def update
	  @user = current_user || User.from_omniauth(request.env["omniauth.auth"])
		if @user.update_attributes(user_params)
		  	render_wizard @user
		else
	        respond_to do |format|
	          format.js do
	            render template: 'devise/registrations/failed_modal.js.erb',
	            layout: false,
	            locals: { error_messages: @user.errors.full_messages }
	          end
	        end
	    end
	end


	private

	def user_params
    	params.require(:user).permit(:email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :street, :house_number, :city, :zip_code)
  	end

	def redirect_to_finish_wizard(options = nil, params = nil)
		redirect_to new_user_profile_path(current_user)
	end

end

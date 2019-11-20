class Users::RegistrationsController < Devise::RegistrationsController

	protected

	  def after_sign_up_path_for(resource)
	    new_user_profile_path(current_user.id) # Or :prefix_to_your_route
	  end
  # Override the action you want here.
end
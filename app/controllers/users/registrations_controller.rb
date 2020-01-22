class Users::RegistrationsController < Devise::RegistrationsController
  
  respond_to :html, :js
  before_action :configure_sign_up_params, only: [:create]
 
  def new
  	super
  end

  def create
    @user = User.new(sign_up_params) 
      if @user.save
        sign_in @user
        redirect_to user_steps_path(:new, :user_id => @user.id)
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

  def update
 	  super
  end

protected

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :password, :password_confirmation ] )
  end 

	def after_sign_up_path_for(resource)
    	user_steps_path 
	end

	def after_update_path_for(resource)
    	user_steps_path 
	end

end

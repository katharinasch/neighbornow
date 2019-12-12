class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    #@profile = Profile.new
    @user = User.new
  end


  def create
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_steps_path
    else
      render :new
    end
  end



  #def update
    #current_user.update_attributes(user_params)
    #redirect_to user_profile_path(@user)
  #end 

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :street, :house_number, :city, :zip_code)
  end


end

class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :street, :house_number, :city, :zip_code)
  end


end
class ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :edit, :update, :destroy]

  def show
    @user = User.eager_load(:profile).find(params[:user_id])
    @profile = @user.profile
    #@review = Review.new
    #@reviews = Review.where(profile: @profile) 
  end

  def new
    @user = current_user
    @profile = Profile.new
  end

  def edit
    @user = current_user
    @profile = @user.profile
  end

  def create
    @user = current_user
    @profile = @user.build_profile(profile_params)

    respond_to do |format|
      if @profile.save
        format.html { redirect_to user_profile_path(current_user.id), notice: 'Profile was successfully created.' }
        format.json { render :show, status: :created, location: @profile }
      else
        format.html { render :new, notice: 'Did not save' }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to user_profile_path(current_user.id), notice: 'Profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @profile }
      else
        format.html { render :edit }
        format.json { render json: @profile.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @profile.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'Profile was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def set_profile
      @profile = current_user.profile
    end

    def profile_params
      params.fetch(:profile, {}).permit(:about, :avatar)
    end

end
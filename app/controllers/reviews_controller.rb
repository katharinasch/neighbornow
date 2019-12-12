class ReviewsController < ApplicationController
  before_action :set_profile
  before_action :set_review, only: :new
  #skip_after_action :verify_policy_scoped, only: :index
  #skip_before_action :authenticate_user!, only: [ :index, :show ]

  def new
    @review = Review.new
    #authorize @review
  end

def create
	#@user = User.find(params[:user_id])
	@profile = Profile.find(params[:profile_id])
	@review = @profile.reviews.build(review_params)
	@review.user_id = current_user.id

	if @review.save
		redirect_to user_profile_path(current_user, @profile)
	else
		redirect_to user_profile_path(current_user, @profile), notice: "Didn't save your review"
	end
end

  private

  def review_params
    params.fetch(:review, {}).permit(:rating, :content)
  end

def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_review
   @review = Review.find(params[:id])
  end

end
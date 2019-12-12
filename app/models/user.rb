class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[facebook]
  

	has_one :profile, dependent: :destroy
	after_create :create_profile
	#has_many :reviews, dependent: :destroy
	accepts_nested_attributes_for :profile
	validates :first_name, presence: true
	validates :last_name, presence: true
	#validates :street, presence: true
	#validates :house_number, presence: true
	#validates :city, presence: true
	#validates :zip_code, presence: true

	def self.from_omniauth(auth)
	  	where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
		    user.email = auth.info.email
		    user.password = Devise.friendly_token[0, 20]
		    name = auth.info.name
		    user.first_name = name.split(" ")[0]
		    user.last_name = name.split(" ")[1] # assuming the user model has a name
		    # user.image = auth.info.image # assuming the user model has an image
		    # If you are using confirmable and the provider(s) you use validate emails, 
		    # uncomment the line below to skip the confirmation emails.
		    # user.skip_confirmation!
	  	end
	end
end

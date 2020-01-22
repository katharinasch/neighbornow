class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[facebook]


	has_one :profile, dependent: :destroy
	after_create :create_profile
	#has_many :reviews, dependent: :destroy
	accepts_nested_attributes_for :profile
	validates :first_name, presence: true, on: [:create, :update]
	validates :last_name, presence: true, on: [:create, :update]
	validates :street, presence: true, :on => :update
	validates :house_number, presence: true, :on => :update
	validates :city, presence: true, :on => :update
	validates :zip_code, presence: true, :on => :update


	def self.from_omniauth(auth)
	  	where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
		    user.email = auth.info.email
		    user.password = Devise.friendly_token[0, 20]
		    name = auth.info.name
		    user.first_name = name.split(" ")[0]
		    user.last_name = name.split(" ")[1] 
		end
	end
end

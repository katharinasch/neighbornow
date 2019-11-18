class Profile < ApplicationRecord
	belongs_to :user
	validates :about, presence: true
	validates :user_id, presence: true
	# has_one_attached :avatar
end

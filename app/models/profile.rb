class Profile < ApplicationRecord
	belongs_to :user
	has_many :reviews, dependent: :destroy
	validates :about, presence: true
	validates :user_id, presence: true
	has_one_attached :avatar
end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise	:database_authenticatable, #enter based on password, which is saved in db. With POST-request or HTTP Basic Authentication
  			:confirmable, # Email wil instruction on registration
  			:recoverable, # Allows to recover forgotten password
  			:registerable, # Manages user regestration, allows to add and delete users
  			:rememberable, # Remembers users based on cookies
  			:validatable # Criteria for password ans user validation
end

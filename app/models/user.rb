class User < ApplicationRecord

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :email, uniqueness: true
    validates :phone_number, uniqueness: true
end

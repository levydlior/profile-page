class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :last_name, :email, :profile_picture, :country, :date_of_birth, :phone_number
end

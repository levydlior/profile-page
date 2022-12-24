# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding"

User.create(username: "test", password: "test", name: "test", last_name: "test", email: "test@test.com", profile_picture: "testURL", country: "test", date_of_birth: "1992-02-04", phone_number:1122334455)

puts "done seeding"
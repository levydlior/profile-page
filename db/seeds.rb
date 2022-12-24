
puts "seeding"

User.create(username: "test", password: "test", name: "test", last_name: "test", email: "test@test.com", profile_picture: "testURL", country: "test", date_of_birth: "1992-02-04", phone_number:1122334455)

puts "done seeding"
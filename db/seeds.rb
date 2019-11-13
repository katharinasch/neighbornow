# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do |n|
	email = Faker::Internet.email
	password = "password"
	User.create!(
		email: email,
		password: password,
		password_confirmation: password)
	p "Created user #{n+1}"
end

users = User.all

i = 0
users.each do |user|
	i += 1
	about = Faker::Lorem.paragraph
	user.build_profile(
		about: about,
		rating: rand(1..5))
	user.save!
	puts "Created profile #{i}"
end


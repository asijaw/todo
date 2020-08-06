# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(username: "asijann", email: "asija@123.com", lists: [description: "item1", description: "item2"])
User.destroy_all
List.destroy_all

users_name = [
  'Natalie',
  'Prince',
  'Dick',
  'Rachel',
  'Garry',
  'Jason',
  'Matt',
  'Niky',
  'Ashley'
]
 
user_collection = []
 
users_name.each do |name|
  user_collection << User.create(username: name, email: "123@abc.com")
end
 
user_collection.each do |user|
  team_size = 4
 
  (1..team_size).each_with_index do |listItem, index|
    description = "item #{index}"
    List.create(description: description, user_id: user.id)
  end
end

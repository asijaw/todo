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
  'Gabby',
  'Rachel',
  'Garry',
  'Jason',
  'Matt',
  'Hailey',
  'Ashley'
]

users_task = [
  'Cook Dinner',
  'Clean the House',
  'Do Homework',
  'Code Javascript',
  'Learn a New Skill',
  'Walk the Dog',
  'Get the Car Washed',
  'Make Doctors Appointment',
  'Do the Laundry',
  'Paint a Picture',
  'Watch a Movie',
  'Do a Zoom Chat',
  'Plan a Party',
  'Call your Mom',
  'Do Something Nice for Someone',
  'Go for a Run',
  'Go to the Store',
  'Go to Virtusl Meetup',
  'Update Resume',
  'Write a Blog Post',
  'Research New Tech',
  'Binge Watch a Show',
  'Go to the Gym',
  'Plant a Garden',
  'Wear a Mask',
  'Wash your Hands',
]
 
user_collection = []
 
users_name.each do |name|
  user_collection << User.create(username: name, email: "123@abc.com")
end
 
user_collection.each do |user|
  list_size = 4
 
  (1..list_size).each do |listItem|
    description = users_task.sample
    List.create(description: description, user_id: user.id)
  end
end

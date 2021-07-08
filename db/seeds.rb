# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

# # Table.destroy_all
# # Seat.destroy_all
# # Guest.destroy_all


# Table.create(table_number: "1", seat_count:5)
# Table.create(table_number: "2", seat_count:5)
# Table.create(table_number: "3", seat_count:5)
# Table.create(table_number: "4", seat_count:5)
# Table.create(table_number: "5", seat_count:5)

# Seat.create(seat_number: "1", table_id: 1)
# Seat.create(seat_number: "2", table_id: 1)
# Seat.create(seat_number: "3", table_id: 1)
# Seat.create(seat_number: "4", table_id: 1)
# Seat.create(seat_number: "5", table_id: 1)

# Seat.create(seat_number: "1", table_id: 2)
# Seat.create(seat_number: "2", table_id: 2)
# Seat.create(seat_number: "3", table_id: 2)
# Seat.create(seat_number: "4", table_id: 2)
# Seat.create(seat_number: "5", table_id: 2)

# Seat.create(seat_number: "1", table_id: 3)
# Seat.create(seat_number: "2", table_id: 3)
# Seat.create(seat_number: "3", table_id: 3)
# Seat.create(seat_number: "4", table_id: 3)
# Seat.create(seat_number: "5", table_id: 3)

# Seat.create(seat_number: "1", table_id: 4)
# Seat.create(seat_number: "2", table_id: 4)
# Seat.create(seat_number: "3", table_id: 4)
# Seat.create(seat_number: "4", table_id: 4)
# Seat.create(seat_number: "5", table_id: 4)

# Seat.create(seat_number: "1", table_id: 5)
# Seat.create(seat_number: "2", table_id: 5)
# Seat.create(seat_number: "3", table_id: 5)
# Seat.create(seat_number: "4", table_id: 5)
# Seat.create(seat_number: "5", table_id: 5)

# Guest.create(name:"Bob", email:"bob@bob.com", phone:'585-555-2210', seat_id:1 )
# Guest.create(name:"Bill", email:"Bill@bob.com", phone:'585-555-0000', seat_id:6 )
# Guest.create(name:"Jeff", email:"Jeff@bob.com", phone:'585-555-1111', seat_id:11 )
# Guest.create(name:"Skylar", email:"Skylar@bob.com", phone:'585-555-2222', seat_id:16 )
# Guest.create(name:"Goeff", email:"Goeff@bob.com", phone:'585-555-3333', seat_id:21 )



# puts "#{Table.count} Tables created!"
# puts "#{Seat.count} Seats created!"
# puts "#{Guest.count} Guests created!"
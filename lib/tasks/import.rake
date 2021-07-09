require 'csv'

namespace :import do

  desc "Import users from csv"
  task users: :environment do 
    # filename = File.join Rails.root, ""
    CSV.foreach("users.csv") do |row|
      email, first, last = row
      # Guest.create(email:email, first_name:first, last_name:last)
    end
end
end
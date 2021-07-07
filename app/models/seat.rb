class Seat < ApplicationRecord
  belongs_to :table
  has_one :guest
end

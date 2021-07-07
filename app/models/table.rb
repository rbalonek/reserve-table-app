class Table < ApplicationRecord
  has_many :seats, dependent: :destroy
  has_many :guests, through: :seats
end

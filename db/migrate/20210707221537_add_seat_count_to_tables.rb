class AddSeatCountToTables < ActiveRecord::Migration[6.0]
  def change
    add_column :tables, :seat_count, :integer
  end
end

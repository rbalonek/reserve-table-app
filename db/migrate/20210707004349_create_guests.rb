class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.references :seat, null: false, foreign_key: true

      t.timestamps
    end
  end
end

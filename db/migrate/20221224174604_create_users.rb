class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :last_name
      t.string :email
      t.string :profile_picture
      t.string :country
      t.date :date_of_birth
      t.integer :phone_number

      t.timestamps
    end
  end
end

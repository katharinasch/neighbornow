class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.text :about
      t.integer :rating

      t.timestamps
    end
  end
end

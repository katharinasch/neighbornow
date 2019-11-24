class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :content
      t.integer :user_id
      t.integer :profile_id

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :profile_id
  end
end

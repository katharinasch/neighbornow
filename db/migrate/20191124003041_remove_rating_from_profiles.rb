class RemoveRatingFromProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :rating, :integer
  end
end

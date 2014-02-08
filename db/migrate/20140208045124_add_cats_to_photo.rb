class AddCatsToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :main_cat, :string
    add_column :photos, :sub_cat, :string
  end
end

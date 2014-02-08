class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title
      t.text :desc
      t.integer :price
      t.string :id_num

      t.timestamps
    end
  end
end

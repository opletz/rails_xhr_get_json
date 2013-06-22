class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.boolean :monthly

      t.timestamps
    end
  end
end

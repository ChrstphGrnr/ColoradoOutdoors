class ChangeUsernameColumnInComments < ActiveRecord::Migration[5.2]
  def change
    rename_column :comments, :username, :name
  end
end

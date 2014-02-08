# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'csv'

Photo.destroy_all
CSV.foreach("#{Rails.root}/lib/assets/UTF-8/image.csv", headers: true) do |row|
     Photo.create(
        :id_num => row[0],
        :title => row[1],
        :main_cat => row[2],
        :sub_cat => row[3] ,
        :image => row[4],
        :price => row[5],
        :desc => row[6],

      )

end

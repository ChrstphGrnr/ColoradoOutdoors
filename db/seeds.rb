
# require 'pry'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

i = 1

loop do
    attractions = []
    response = RestClient::Request.execute(
        method: :get, 
        url: 'https://ridb.recreation.gov/api/v1/recareas', 
        headers: { :params => {apikey: 'ed234cd0-ce5d-4190-96a0-52cd166e52bc', full: 'true', state: 'CO', offset: i}} 
    )

    attractions = JSON.parse(response)

    attractions['RECDATA'].map do |attraction| 
        name = attraction['RecAreaName']
        description = attraction['RecAreaDescription']
        location = [] 
        location << attraction['RecAreaLongitude'] 
        location << attraction['RecAreaLatitude']
        images = attraction['MEDIA'].map{|image| image['URL']} 
        newAttractions = Attraction.create(name: name, description: description, location: location, images: images)
    end
   
    i += 50

  if i == 151
    break       # this will cause execution to exit the loop
  end
end



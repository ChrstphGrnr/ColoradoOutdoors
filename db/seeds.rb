
# require 'pry'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




# Recreation.gov API call


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
        location << attraction['RecAreaLatitude']
        location << attraction['RecAreaLongitude'] 
        images = attraction['MEDIA'].map{|image| image['URL']} 
        newAttractions = Attraction.create(name: name, description: description, location: location, images: images)
    end
   
    i += 50

  if i == 151
    break       # this will cause execution to exit the loop
  end
end

# RegEx to delete all HTML Tags from description
# Attraction.all[0].description.gsub(/<\/?[^>]*>/, "")

# RegEx to delete "\r" from descripton
# Attraction.all[0].description.gsub(/(\r)/,'')



# NPS API call

 
response = RestClient::Request.execute(
    method: :get,
    url: "https://developer.nps.gov/api/v1/parks?stateCode=CO&limit=100&api_key=J0Nab0nguAmrcSZXNGebXAodf3jsDYSeTu9xb2qy&fields=images",
    accept: 'application/json'
    )

 attractions = JSON.parse(response)

 attractions['data'].map do |attraction|
    name = attraction['fullName']
    description = attraction['description']
    location = [attraction['latLong'][/[-.0-9]{11,}/], attraction['latLong'][/[-.0-9]{11,}$/] ]
    images = attraction['images'].map{|image| image['url']}
    newAttractions = Attraction.create(name: name, description: description, location: location, images: images)
 end



# COLORADO TRAILS readme

Welcome to ColoradoOutdoors!
An App to explore all the great Outdoor Activities Colorado has to offer. 

This is the 5th and final project in Flatiron School's Online Software Developer Program. 
The front end is composed entirely of a React/Redux codebase with a Rails/PostgreSQL on the backend. 
2 external APIs supply the data to showcase the Attractions, 

## Authors

Christoph Gruener - https://www.linkedin.com/in/christoph-gruener - https://www.github.com/chrstphgrnr

## External API Data

https://www.Recreation.gov
https://www.NationalParkService.gov

## License 

This project is licensed under the MIT license. 

https://opensource.org/licenses/MIT

## Contributors

A big thanks goes to Vinh. https://github.com/BebopVinh
Trouble shooting par excellence! 

And as always, Alex Aguilar. https://github.com/bosskey59
Best cohort lead ever. 





If you would like to fork this repo, feel free to explore it and play with it. 
Here are a few requirements you need to be aware of. 


## Install/Dependencies

* Ruby version needed - 2.6.3
* Ruby on Rails version '~> 5.2.x'
* Node Package Manager needs to be installed
* PostgreSQL server needs to be set up and running - please refer to database.yml for information on the specific names for the database
* Postman is always helpful when making API calls
* You will need your own National Parks Service API and Recreation.gov API keys
* This repo does not include the master.key file - you will need to create your own
    In short, once you forked and cloned this repo locally, run 'EDITOR=vim rails credentials:edit 
    This will create your master.key file and open your credentials.yml.enc file. 
    Please adjust the calls to credentials.yml.enc in the following files. 
    ```/db/seed.rb``` 
    ```/config/database.yml``` 

* Once the above dependencies are resolved, please run ```npm install ``` followed by ```rake db:migrate``` followed by ```rake db:seed``` 
* After that there is a simple rake task set up to run both the rails backend and the react front end: ```rake start```

### Questions/Comments 

Feel free to reach out on Github or LinkedIn. 







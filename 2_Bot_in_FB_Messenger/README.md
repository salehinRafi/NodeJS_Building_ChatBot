# Project Title

Rule Based Weather Bot In Facebook Messenger

# Summary
This is a weather forecast chatbot on a Facebook Messenger platform that integrates with Yahoo Weather API to give a forecast based on location. By manipulating the user input with the regular expression to extract the entities set for a specific pattern based on user input. The entities contain the location, weather forecast and temperature.

# Installing

#### 1. Setup PAGE_ACCESS_TOKEN
#### 2. Setup VERIFY_TOKEN
Run Command below and paste the result in development.json
````
node
require('crypto').randomBytes(24).toString('hex')
````

## Running the tests

#### 1. Running the app
```
nodemon ./app.js
````

#### 2. . Give an Input
For Greetings
```
Hi | Hello | Hey
````
For Farewell
```
Bye | Exit | Later
````
Get a Current Weather
```
like in { any-location-you-want }
Eg: What is the weather like in Kuala Lumpur
````
Get a Forecast Weather
```
will it be {hot|rain|snow|thunderstorm} {tomorrow|day after tomorrow|today} in { any-location-you-want }
Eg: Will it be hot tomorrow in Kualau Lumpur
````


## Built With

* [Restify](http://restify.com/) - A Node.js web service framework optimized for building semantically correct RESTful web services ready for production use at scale. restify optimizes for introspection and performance, and is used in some of the largest Node.js deployments on Earth.
* [Node.js](https://nodejs.org/en/) - The platform used
* [Yahoo Weather API](https://developer.yahoo.com/weather/) - Getting Weather Forecast
* [XRegExp](http://xregexp.com/) - JavaScript Regular Expressions
* [Colors](https://www.npmjs.com/package/colors) - Get color and style in node.js console
* [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.

## Authors

* **Salehin Rafi** - *Initial work*

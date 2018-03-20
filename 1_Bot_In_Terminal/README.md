# Project Title

Rule Based Weather Bot In Terminal

# Summary
This is a weather forecast chatbot on a terminal platform that integrates with Yahoo Weather API to give a forecast based on location. By manipulating the user input with the regular expression to extract the entities set for a specific pattern based on user input. The entities contain the location, weather forecast and temperature.

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
Eg: Will it be hot tomorrot in Kualau Lumpur
````


## Built With

* [Node.js](https://nodejs.org/en/) - The platform used
* [Yahoo Weather API](https://developer.yahoo.com/weather/) - Getting Weather Forecast
* [XRegExp](http://xregexp.com/) - JavaScript Regular Expressions
* [Colors](https://www.npmjs.com/package/colors) - Get color and style in node.js console
* [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.

## Authors

* **Salehin Rafi** - *Initial work*

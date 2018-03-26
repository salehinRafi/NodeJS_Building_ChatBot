# Project Title

Rule Based Weather Bot In Facebook Messenger

# Summary
This is a weather forecast chatbot on a Facebook Messenger platform that integrates with Yahoo Weather API to give a forecast based on location. By manipulating the user input with the regular expression to extract the entities set for a specific pattern based on user input. The entities contain the location, weather forecast and temperature.

# Installing


#### 1. Setup VERIFY_TOKEN
1. Run Command below and paste the result in config/development.json under `VERIFY_TOKEN` field.
    ````
    node
    require('crypto').randomBytes(24).toString('hex')
    ````

#### 2. Setup PAGE_ACCESS_TOKEN
1. Create or configure a Facebook App or Page here https://developers.facebook.com/apps/

2. In the app go to Messenger tab then click Setup Webhook. Here you will put in the URL of your server or ngrok url and a token. Make sure to check the 'message' subscription fields.

3. Get a Page Access Token and save this at config/development.json under `PAGE_ACCESS_TOKEN` field.

4. Select a page to subscribe your webhook to the page events.

## Running the tests

#### Give an input
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

## Live Demo
[Demo Page] (https://www.facebook.com/Met-With-Iklim-203272513594175/)

## Built With

* [Restify](http://restify.com/) - A Node.js web service framework optimized for building semantically correct RESTful web services ready for production use at scale. restify optimizes for introspection and performance, and is used in some of the largest Node.js deployments on Earth.
* [Node.js](https://nodejs.org/en/) - The platform used
* [Yahoo Weather API](https://developer.yahoo.com/weather/) - Getting Weather Forecast
* [XRegExp](http://xregexp.com/) - JavaScript Regular Expressions
* [Moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [Request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http request/calls. It supports HTTPS and follows redirects by default.

## Authors

* **Salehin Rafi** - *Initial work*

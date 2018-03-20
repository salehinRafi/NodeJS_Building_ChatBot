'use strict;'

//Simple user interface using terminal
const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const matcher = require('./matcher');
const weather = require('./weather');
const { currentWeather, forecastWeather } = require('./parser'); // Destructuring


rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {

    matcher(reply, data => {
        switch (data.intent) {
            case 'Hello':
                console.log("A big Hello From Vanilla!");
                console.log(`${data.entities.greeting} to you too`);
                rl.prompt();
                break;
            case 'Exit':
                console.log("Have a Great Day!!");
                process.exit(0);
                break;
            case 'CurrentWeather':
                console.log(`Checking weather for ${data.entities.city}...`);
                //get weather from API
                weather(data.entities.city, 'current').then(response => {
                    let parseResult = currentWeather(response);
                    console.log(parseResult);
                    rl.prompt();
                }).catch(error => {
                    console.log('There seem to be a problem connecting to the Weather service');
                    rl.prompt();
                });
                break;
            case 'WeatherForecast':
                console.log(`Checking weather for ${data.entities.city}...`);
                //get weather from API
                weather(data.entities.city).then(response => {
                    let parseResult = forecastWeather(response, data.entities);
                    console.log(parseResult);
                    rl.prompt();
                }).catch(error => {
                    console.log('There seem to be a problem connecting to the Weather service');
                    rl.prompt();
                });
                break;
            default:
                console.log("I dont Know What You Mean");
                rl.prompt();
        }
    });
});
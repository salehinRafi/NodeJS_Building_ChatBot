"use strict";
// create an API Server

const Restify = require('restify');
const server = Restify.createServer({
    name: "MetMessengerRestify"
});
const PORT = process.env.PORT || 3000;

// bring json parser middleware mounted to use
// allow us to extract json data from get request we receive from fb
// both parser collectively allow use to extract and consume data that receive from fb over GET & POST request.
server.use(Restify.jsonp());
server.use(Restify.bodyParser());


// Get Token
const config = require("./config");

// FBeamer
const FBeamer = require("./fbeamer");
const f = new FBeamer(config);

// WeatherAPI
const matcher = require("./matcher");
const weather = require("./weather");
const { currentWeather, forecastWeather } = require("./parser");


// Register the webhooks
server.get('/', (req, res, next) => {
    console.log("REGISTER_WEBHOOK: Connect Webhook");
    f.registerHook(req, res);
    return next(); // to ensure our control move on from this handler to next route handler in the apps. 
});

// Receive all incoming message
server.post('/', (req, res, next) => {
    f.incoming(req, res, msg => {
        // Simple Usage of helper.
        //f.txt(msg.sender, `Hey you just send ${msg.message.text}`);// invoke function to test text message.
        //f.img(msg.sender, "https://cdn.pixabay.com/photo/2017/08/21/21/25/cloudy-2667021_960_720.png"); // invoke function to test image message.

        // Process TEXT message
        if (msg.message.text) {
            // if a text message receive
            matcher(msg.message.text, data => {
                switch (data.intent) {
                    case "Hello":
                        f.txt(msg.sender, `${data.entities.greeting} to you too!`);
                        break;
                    case "CurrentWeather":
                        weather(data.entities.city, "current")
                            .then(response => {
                                let parseResult = currentWeather(response);
                                f.txt(msg.sender, parseResult);
                            }).catch(error => {
                                console.log("There seems to be a problem connecting to the weather service");
                                f.txt(msg.sender, "Hmm,something is not right with my server! Do check back in a while.... Sorry.")
                            });
                        break;
                    case "WeatherForecast":
                        weather(data.entities.city)
                            .then(response => {
                                let parseResult = forecastWeather(response, data.entities);
                                f.txt(msg.sender, parseResult);
                            }).catch(error => {
                                console.log("There seems to be a problem connecting to the weather service");
                                f.txt(msg.sender, "Hmm,something is not right with my server! Do check back in a while.... Sorry.")
                            });
                        break;
                    default:
                        f.txt(msg.sender, "I'm sorry. I don't know what you mean :( ")
                }
            });
        }
    });
    return next();
});
// Subscribe to page
f.subscribe();
server.listen(PORT, () => console.log(`LISTEN_PORT: Met running on port ${PORT}`));
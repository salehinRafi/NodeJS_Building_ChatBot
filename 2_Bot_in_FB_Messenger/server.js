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

// Register the webhooks
server.get('/', (req, res, next) => {
    console.log("Connect Webhook");
    f.registerHook(req, res);
    return next(); // to ensure our control move on from this handler to next route handler in the apps. 
});

// Receive all incoming message
server.post('/', (req, res, next) => {
    f.incoming(req, res, msg => {
        // Process message
        console.log(msg);
        //invoke function to test message.
        f.txt(msg.sender, `Hey you just send ${msg.message.text}`)
    });
    return next();
});

server.listen(PORT, () => console.log(`Met running on port ${PORT}`));
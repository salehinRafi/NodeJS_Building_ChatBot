"use strict";
// create an API Server

const Restify = require('restify');
const server = Restify.createServer({
    name: "MetMessengerRestify"
});
const PORT = process.env.PORT || 3000;

// Get Token
const config = require("./config");

// FBeamer
const FBeamer = require("./fbeamer");
const f = new FBeamer(config);

// Test
server.get('/', (req, res, next) => {
    res.send("HelloWorld");
    return next(); // to ensure our control move on from this handler to next route handler in the apps. 
});


server.listen(PORT, () => console.log(`Met running on port ${PORT}`));
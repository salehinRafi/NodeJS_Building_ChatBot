"use strict";

class FBeamer {
    constructor(config) {
        try {
            if (!config || config.PAGE_ACCESS_TOKEN === undefined || config.VERIFY_TOKEN === undefined) {
                throw new Error("Unable to access token!")
            } else {
                this.PAGE_ACCESS_TOKEN = config.PAGE_ACCESS_TOKEN;
                this.VERIFY_TOKEN = config.VERIFY_TOKEN;
            }
        } catch (error) {
            console.log(error);
        }
    }

    registerHook(req, res) {
        // If req.query.hub.mode is 'subscribe'
        // and if  req.query.hub.verify_token is the same as this.VERIFY_TOKEN
        // then we simply send back an HTTP status 200 and req.query.hub.challenge.
        let { mode, verify_token, challenge } = req.query.hub; // use destrucuring object to access directly the value. 

        if (mode === "subscribe" && verify_token === this.VERIFY_TOKEN) {
            return res.end(challenge); // send and end the response and send back the challenge code
        } else {
            console.log("Could not register webhook!");
            return res.status(403).end();
        }
    }
}

module.exports = FBeamer;
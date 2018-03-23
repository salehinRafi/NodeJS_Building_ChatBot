"use strict";
const request = require("request");

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
            console.log("Success connect to webook");
            return res.end(challenge); // send and end the response and send back the challenge code
        } else {
            console.log("Could not register webhook!");
            return res.status(403).end();
        }
    }

    // receive message request, response, callback
    incoming(req, res, cb) {
        // Extract body of the POST request
        let data = req.body;
        if (data.object === "page") {
            // Iterate  through the page entry Array
            data.entry.forEach(pageObj => {
                // Iterate through the messaging Array
                pageObj.messaging.forEach(msgEvent => {
                    let messageObj = {
                        sender: msgEvent.sender.id,
                        timeOfMessage: msgEvent.timestamp,
                        message: msgEvent.message
                    };
                    // execute callbakc function
                    cb(messageObj);
                });
            });
        }

        res.send(200);
    }

    sendMessage(payload) {
        return new Promise((resolve, reject) => {
            // Create an HTTP POST request
            request({
                "uri": "https://graph.facebook.com/v2.6/me/messages",
                "qs": {
                    "access_token": this.PAGE_ACCESS_TOKEN
                },
                "method": "POST",
                "json": payload
            }, (error, response, body) => {
                // Useful analyzing how the response went.Also accessing any request data that might have return.
                if (!error && response.statusCode === 200) {
                    console.log('Message sent!')
                    resolve({
                        messageId: body.message_id
                    });
                } else {
                    console.error("Unable to send message:" + error);
                    reject(error);
                }
            });
        });
    }

    // Helper to test send message
    txt(id, text) {
        let obj = {
            recipient: {
                id
            },
            message: {
                text
            }
        }

        this.sendMessage(obj)
            .catch(error => console.log(error));
    }
}

module.exports = FBeamer;
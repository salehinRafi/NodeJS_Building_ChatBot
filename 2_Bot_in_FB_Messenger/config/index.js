"use strict";

// Check environment
if (process.env.NODE_ENV === "production") { // production
    module.exports = {
        PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
        VERIFY_TOKEN: process.env.VERIFY_TOKEN,
        URI_MESSAGE: process.env.URI_MESSAGE,
        URI_SUBSCRIBE: process.env.URI_SUBSCRIBE
    }
} else { // development
    module.exports = require("./development.json");
}
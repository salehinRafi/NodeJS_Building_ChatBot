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
}

module.exports = FBeamer;
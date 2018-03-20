'use strict';

let getFeel = temp => {
    if (temp < 5) {
        return "shivering cold";
    } else if (temp >= 5 && temp < 15) {
        return "pretty cold";
    } else if (temp >= 15 && temp < 25) {
        return "moderatly cold";
    } else if (temp >= 25 && temp < 32) {
        return "quite warm";
    } else if (temp >= 32 && temp < 40) {
        return "very hot";
    } else {
        return "super hot";
    }
};


let currentWeather = response => {
    if (response.query.results) {
        let resp = response.query.results.channel;
        let location = `${resp.location.city}, ${resp.location.country}`;
        // Access Conditions.
        let { text, temp } = resp.item.condition; // text = resp.item.condition.text; temp = resp.item.condition.temp

        return `Right now, it is ${text.toLowerCase()} in ${location}. It is ${getFeel(Number(temp))} at ${temp} degree Celcius.`
    }
};

module.exports = {
    currentWeather
};
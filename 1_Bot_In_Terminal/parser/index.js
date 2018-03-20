"use strict";

const colors = require("colors");
const dictionary = require("./dictionary");
const moment = require("moment");

// Get a feel based on temperature
let getFeel = (temp) => {
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

let getPrefix = (conditionCode, tense = "present") => {
    let findPrefix = dictionary[tense].find(item => {
        if (item.codes.indexOf(Number(conditionCode)) > -1) {
            return true;
        }
    });

    return findPrefix.prefix || "";
};

let getDate = day => {
    let dayStr = day.toLowerCase().trim();
    switch (dayStr) {
        case "tomorrow":
            return moment().add(1, "d").format("DD MM YYYY");
        case "day after tomorrow":
            return moment().add(2, "d").format("DD MM YYYY");
        default:
            return moment().format("DD MM YYYY");
    }
};

let currentWeather = (response) => {
    if (response.query.results) {
        let resp = response.query.results.channel;
        let location = `${resp.location.city}, ${resp.location.country}`;
        // Access Conditions.
        let { text, temp, code } = resp.item.condition; // text = resp.item.condition.text; temp = resp.item.condition.temp

        return `Right now, ${getPrefix(code)} ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp)).bold} at ${temp.red.bold} degree Celcius.`
    } else {
        return "I don't seem to know anything about this place. Forgive me......";
    }
};


let forecastWeather = (response, data) => {
    if (response.query.results) {
        // convert 'today', 'tomorrow', 'day after tomorrow' into date format. Eg. 20 March 2018
        let parseDate = getDate(data.time);
        let resp = response.query.results.channel;
        let getForecast = resp.item.forecast.filter(item => {
            return item.date === parseDate;
        })[0];
        let location = `${resp.location.city}, ${resp.location.country}`;
        let regEx = new RegExp(data.weather, "i"); // set a regex based on data user input
        let testConditions = regEx.test(getForecast.text); // test the regex with weather we get from Yahoo API with result true or false

        return `${testConditions ? "Yes": "No"}, ${getPrefix(getForecast.code,"future")} ${getForecast.text.bold} ${data.time} in ${location}`;


    } else {
        return "I don't seem to know anything about this place. Forgive me......";
    }
};

module.exports = {
    currentWeather,
    forecastWeather
};
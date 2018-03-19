const patterDict = [{
    'pattern': '\\b(?<greeting>Hi|Hello|Hey)\\b',
    'intent': 'Hello'
}, {
    'pattern': '\\b(Bye|Exit)\\b',
    'intent': 'Exit'
}, {
    'pattern': 'like\\sin\\s\\b(?<city>.+)',
    'intent': 'CurrentWeather'
}];
module.exports = patterDict;
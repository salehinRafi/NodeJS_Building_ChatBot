const patterDict = [{
    'pattern': '\\b(?<greeting>Hi|Hello|Hey)\\b',
    'intent': 'Hello'
}, {
    'pattern': '\\b(Bye|Exit|Later)\\b',
    'intent': 'Exit'
}, {
    'pattern': 'like\\sin\\s\\b(?<city>.+)',
    'intent': 'CurrentWeather'
}, {
    'pattern': '\\b(?<weather>hot|cold|rain|rainy|sunny|snow|thunderstorms|windy|drizzle)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\safter\\stomorrow|tomorrow|today)$',
    'intent': 'WeatherForecast'
}, {
    'pattern': '\\b(?<weather>hot|cold|rainy|rain|sunny|snow|thunderstorms|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)$',
    'intent': 'WeatherForecast'
}];
module.exports = patterDict;
const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b6bc8f566ce9f7f78f6be99577f15bb4&query='+ longitude + ',' + latitude
    request({url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (response.body.error) {
            callback ('Unable to find location. Try another search', undefined);
            console.log(response.body.error);
        }   else {
            callback(undefined,response.body.current.weather_descriptions[0] + ". The current tempeature : " + response.body.current.temperature + " degrees " + "Visibilty:" +  response.body.current.visibility)
        }  
            })
        
    
}

module.exports = forecast;

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
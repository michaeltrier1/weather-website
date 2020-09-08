const request = require('request')



// request({ url: url, json: true}, (error, response) => {
//     if(error) {
//         console.log('unable to connect to weather service!');
//     } else if(response.body.features.length ===0) {
//         console.log("You fucked up the API");
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
//  //console.log(response.body.current.weather_descriptions[0] + ". The current tempeature : " + response.body.current.temperature + " degrees " + "Visibilty:" +  response.body.current.visibility)
// })

const geocode = (address, callback) => {
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXRyaWVyMTIzIiwiYSI6ImNrZWwzYjMzeTFhYWQycm5wMGZxeTJoaWEifQ.LAjeKxlQiFK1_dVFCD_DKQ';
    request({url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0 ) {
            callback ('Unable to find location. Try another search!!!!', undefined);
        }   else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            })    
        }   
    })
}

module.exports = geocode;
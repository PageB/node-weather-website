const request = require('request');

const _BASEURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const _ACCESS_TOKEN = 'pk.eyJ1IjoicGFnZWIiLCJhIjoiY2p4cHlmMDZiMDN6ODNtcjNvcDYweG9xMCJ9.gQ-6gs345IdIpqHHgi0RJg';

const geocode = (address, callback) => {
  const url = `${_BASEURL}${encodeURIComponent(address)}.json?access_token=${_ACCESS_TOKEN}`

  request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback('Unable to connect to weather service.', undefined);
      } else if (body.features.length === 0) {
        callback('Unable to find location.', undefined);
      } else {
        const location = body.features[0];

        callback(undefined, {
          coordinates: location.geometry.coordinates.reverse().toString(),
          location: location.place_name
        });
      }
  });
}

module.exports = geocode;
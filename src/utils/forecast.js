const request = require('request');

const _BASEURL = 'https://api.darksky.net/forecast';
const _ACCESS_TOKEN = '5b45dd9a5a892340cd83700685b28299';

const forecast = (coordinates, callback) => {
  const url = `${_BASEURL}/${_ACCESS_TOKEN}/${coordinates}?units=si`

  request({ url, json: true }, (error, { body }) => {
      if (error) {
        callback('Unable to connect to weather service.', undefined);
      } else if (body.error) {
        callback('Unable to find location.', undefined);
      } else {
        const currentlyData = body.currently;

        callback(undefined, 'It is currently ' + currentlyData.temperature + ' degrees out. There is a ' + currentlyData.precipProbability + '% change of rain.');
      }
  });
}

module.exports = forecast;
# google-geoip-location
Simple node.js lib to fetch location data from the google geoip API.   
Promise with the location data will be returned or error message on failure.

## Install
```npm install git@github.com:iliaivanov/google-gecode-location.git#1.0.0```   

## Usage
```javascript   
const googleGeocode = require('google-gecode-location');

const locationData = googleGeocode.geocodeAddress('tallinn').then((location) => {
    console.log(location);
}, (error) => {
    console.log(error);
});
```

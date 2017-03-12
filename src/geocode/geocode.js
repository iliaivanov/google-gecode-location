const axios = require('axios');

const apiResponseStatuses = {
    ok: 'OK',
    no_results: 'ZERO_RESULTS'
};

var geocodeAddress = (address) => {
    var encodedAddressInput = encodeURIComponent(address),
        geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddressInput}`;

    return new Promise((resolve, reject) => {
        axios.get(geocodeUrl).then((response) => {
            if (response.data.status === apiResponseStatuses.no_results) {
                throw new Error(`Unable to find that address.`);
            }

            resolve({
                    address: response.data.results[0].formatted_address,
                    lattitude: response.data.results[0].geometry.location.lat,
                    longitude: response.data.results[0].geometry.location.lng,
                });
        }).catch((e) => {
            reject(e.message);
        });
    });
};

module.exports.geocodeAddress = geocodeAddress;

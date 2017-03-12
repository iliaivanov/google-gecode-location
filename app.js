const yargs = require('yargs');
const geocode = require('./src/geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});

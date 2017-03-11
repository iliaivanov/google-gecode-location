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

geocode.geocodeAddress(argv.a, (results) => {
    if (results.success) {
        console.log(JSON.stringify(results.address, undefined, 2));
    } else {
        console.log(results.message);
    }
});

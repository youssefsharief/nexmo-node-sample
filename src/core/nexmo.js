const Nexmo = require('nexmo');
const options = {
    debug: true,
}
const nexmo = new Nexmo({
    apiKey: process.env.apiKey,
    apiSecret: process.env.apiSecret,
}, options);


module.exports = nexmo
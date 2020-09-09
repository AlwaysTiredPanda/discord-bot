const FerretLunaClient = require('./Structures/FerretLunaClient');
const config = require('../config.json');
const client = new FerretLunaClient(config);

client.start();
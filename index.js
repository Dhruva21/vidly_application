require('express-async-errors')
const winston = require('winston')
const express = require('express');
const app = express();

require('./startup/routes')(app); // handling the routes
require('./startup/db')(); // connect to the database.
require('./startup/config')();
require('./startup/validation')(); // joi module to validate the api input to the server.

winston.add(new winston.transports.File({ filename : 'logfile.log' }));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;
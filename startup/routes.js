const express = require('express')
const genres = require('../routes/genres');
const customers = require('../routes/customers')
const movies = require('../routes/movies')
const rentals = require('../routes/rentals')
const users = require('../routes/users')
const auth = require('../routes/auth')
const error = require('../middleware/error')

module.exports = function(app){
    
    app.use(express.json());// middleware functionality to make sure everything is parsed into json objects, which can be accesed during the restful api requests

    app.use('/api/genres', genres); // this is the step where I have written the genres api is starting from here.

    // we can have one more endpoint exclusively for the customer.
    app.use('/api/customers', customers);

    // movies end point 
    app.use('/api/movies', movies)

    // rentals api
    app.use('/api/rentals', rentals);

    //register user
    app.use('/api/users', users)

    // auth endpoint
    app.use('/api/auth', auth)

    app.use(error)
}
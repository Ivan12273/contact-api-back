'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contact', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successful database connection');

        // Server creation
        app.listen(port, () => {
            console.log('Server running correctly')
        });
    })
    .catch(err => console.log(err));
'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contact', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successful database connection');
    })
    .catch(err => console.log(err));
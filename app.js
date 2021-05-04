'use strict'

var express = require('express');

var app = express();

// load routes files

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS 


// routes
app.get('/')

// Export
module.exports = app;
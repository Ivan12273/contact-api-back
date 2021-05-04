'use strict'

const express = require('express');

const app = express();

// Load routes files
var userRoutes = require('./routes/user.routes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/', userRoutes);

// Export
module.exports = app;

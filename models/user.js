'use strict'

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'The name is necessary'],
    },
    lastName: {
        type: String,
        required: [true, 'The last name is necessary'],
    },
    company: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: [true, "The email is necessary"]
    },
});

// Validate unique fields
UserSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
});

module.exports = mongoose.model('User', UserSchema);
'use strict'

const User = require("../models/user.model.js");

var controller = {

    create: function(req, res) {
        // Validate request
        if (!req.body) {
            res.status(400).send({
                message: "Error, empty request"
            });
        }

        // Create a User
        const user = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            company: req.body.company,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
        });

        // Save user in the database
        User.create(user, (err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the user."
                });
            } else {
                res.send(data);
            }
        });
    },

    findById: function(req, res) {
        User.findById(req.params.userId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving user with id " + req.params.userId
                    });
                }
            } else {
                res.send(data);
            }
        });
    },

    getAll: function(req, res) {
        User.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving users."
                });
            } else {
                res.send(data);
            }
        });
    },

    update: function(req, res) {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        }
        
        User.update(
            req.params.userId,
            new User(req.body),
            (err, data) => {
                if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating user with id " + req.params.userId
                    });
                }
                } else {
                    res.send(data);
                } 
            }
        );
    },

    delete: function(req, res) {
        User.delete(req.params.userId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete user with id " + req.params.userId
                    });
                }
            } else {
                res.send({ message: `User with id ` + req.params.userId + ` was deleted successfully` });
            }
        });
    }
    
}

module.exports = controller;

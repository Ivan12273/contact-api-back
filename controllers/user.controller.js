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
            if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the user."
            });
            else res.send(data);
        });
    }

}

module.exports = controller;

'use strict'

const User = require("../models/user.model.js");

var controller = {

    create: function(req, res) {
        // Validate request
        if (!req.body) {
            return res.status(400).send({
                message: "Error, empty request"
            });
        }

        // Validate name
        var name = req.body.name;
        var matches = name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
        if(!matches) {
            return res.status(400).send({
                message: "The name is not valid"
            });
        } else if (name.replace(/ /g, "") == "" || name == null) {
            return res.status(400).send({
                message: "The name field must not be empty"
            });
        }

        // Validate lastname
        var lastName = req.body.lastName;
        var matches = lastName.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
        if(!matches) {
            return res.status(400).send({
                message: "The last name is not valid"
            });
        } else if (lastName.replace(/ /g, "") == "" || lastName == null) {
            return res.status(400).send({
                message: "The last name field must not be empty"
            });
        }

        // Validate company
        var company = req.body.company;
        var matches = company.replace(/ /g, "").match(/^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/g);
        if(!matches && company != "" && company != null) {
            return res.status(400).send({
                message: "The company name is not valid"
            });
        } 

        // Validate phone number
        var phoneNumber = req.body.phoneNumber;
        var matches = phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
        if(!matches && phoneNumber != "" && phoneNumber != null) {
            return res.status(400).send({
                message: "Write a valid number"
            });
        } 

        if(phoneNumber == "") {
            req.body.phoneNumber = null;
        }

        // Validate email
        var email = req.body.email;
        var matches = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if(!matches) {
            return res.status(400).send({
                message: "Write a valid email"
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
                return res.status(500).send({
                    message:
                    err.message || "Some error occurred while creating the user."
                });
            } else {
                return res.send(data); //201
            }
        });
    },

    findById: function(req, res) {
        User.findById(req.params.userId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    return res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    return res.status(500).send({
                        message: "Error retrieving user with id " + req.params.userId
                    });
                }
            } else {
                return res.send(data);
            }
        });
    },

    getAll: function(req, res) {
        User.getAll((err, data) => {
            if (err) {
                return res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving users."
                });
            } else {
                return res.send(data);
            }
        });
    },

    getAllWithPagination: function(req, res) {
        User.getAllWithPagination(req.params.page, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message:
                    err.message || "Some error occurred while retrieving users."
                });
            } else {
                return res.send(data);
            }
        });
    },

    update: function(req, res) {
        if (!req.body) {
            return res.status(400).send({
                message: "Content can not be empty!"
            });
        }

        // Validate name
        var name = req.body.name;
        var matches = name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
        if(!matches) {
            return res.status(400).send({
                message: "The name is not valid"
            });
        } else if (name.replace(/ /g, "") == "" || name == null) {
            return res.status(400).send({
                message: "The name field must not be empty"
            });
        }

        // Validate lastname
        var lastName = req.body.lastName;
        var matches = lastName.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g);
        if(!matches) {
            return res.status(400).send({
                message: "The last name is not valid"
            });
        } else if (lastName.replace(/ /g, "") == "" || lastName == null) {
            return res.status(400).send({
                message: "The last name field must not be empty"
            });
        }

        // Validate company
        var company = req.body.company;
        var matches = company.replace(/ /g, "").match(/^((?![\^!@#$*~ <>?]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>?]).)$/g);
        if(!matches && company != "" && company != null) {
            return res.status(400).send({
                message: "The company name is not valid"
            });
        } 

        // Validate phone number
        var phoneNumber = req.body.phoneNumber;
        var matches = phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
        if(!matches && phoneNumber != "" && phoneNumber != null) {
            return res.status(400).send({
                message: "Write a valid number"
            });
        } 

        if(phoneNumber == "") {
            req.body.phoneNumber = null;
        }

        // Validate email
        var email = req.body.email;
        var matches = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if(!matches) {
            return res.status(400).send({
                message: "Write a valid email"
            });
        } 
        
        User.update(
            req.params.userId,
            new User(req.body),
            (err, data) => {
                if (err) {
                if (err.kind === "not_found") {
                    return res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    return res.status(500).send({
                        message: "Error updating user with id " + req.params.userId
                    });
                }
                } else {
                    return res.send(data);
                } 
            }
        );
    },

    delete: function(req, res) {
        User.delete(req.params.userId, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    return res.status(404).send({
                        message: `Not found user with id ${req.params.userId}.`
                    });
                } else {
                    return res.status(500).send({
                        message: "Could not delete user with id " + req.params.userId
                    });
                }
            } else {
                return res.send({ message: `User with id ` + req.params.userId + ` was deleted successfully` });
            }
        });
    }
    
}

module.exports = controller;

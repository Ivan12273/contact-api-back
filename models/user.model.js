'use strict'

const sql = require("./db.js");

// Constructor
const User = function(user) {
    this.name = user.name;
    this.lastName = user.lastName;
    this.company = user.company;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

module.exports = User;

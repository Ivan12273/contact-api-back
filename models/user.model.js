'use strict'

const sql = require("./db.js");

// Constructor
const User = function(user) {
    this.user = user.name;
    this.user = user.lastName;
    this.user = user.company;
    this.user = user.phoneNumber;
    this.user = user.email;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        console.log("created customer: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

module.exports = User;

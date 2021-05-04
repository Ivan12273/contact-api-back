'use strict'

const sql = require("./db.js");

// constructor
const User = function(user) {
    this.user = user.email;
    this.user = user.name;
    this.user = user.active;
};

Customer.create = (newUser, result) => {
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
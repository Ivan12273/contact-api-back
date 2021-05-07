'use strict'

const sql = require("./db.js");

// Constructor
class User {
    constructor(user) {
        this.name = user.name;
        this.lastName = user.lastName;
        this.company = user.company;
        this.phoneNumber = user.phoneNumber;
        this.email = user.email;
    }
    // Create user
    static create(newUser, result) {
        sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("created user: ", { id: res.insertId, ...newUser });
            result(null, { id: res.insertId, ...newUser });
        });
    }
    // Get one user
    static findById(userId, result) {
        sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found user: ", res[0]);
                result(null, res[0]);
                return;
            }

            result({ kind: "not_found" }, null);
        });
    }
    // Get all user
    static getAll(result) {
        sql.query("SELECT * FROM user", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("users: ", res);
            result(null, res);
        });
    }
    // Get all user with pagination
    static getAllWithPagination (pageParam, result) {
        // limit as 20
        const limit = 10;
        // page number
        const page = pageParam;
        // calculate offset
        const offset = (page - 1) * limit;
        sql.query("SELECT * FROM user limit " + limit + " OFFSET " + offset, (err,res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            var jsonResult = {
                'products_page_count':res.length,
                'page_number':page,
                'users':res
            }
            console.log("result: ", jsonResult);
            result(null, jsonResult);
        });
    }
    // Update an user
    static update(id, user, result) {
        sql.query(
            "UPDATE user SET name = ?, lastName = ?, company = ?, phoneNumber = ?, email = ? WHERE id = ?",
            [user.name, user.lastName, user.company, user.phoneNumber, user.email, id],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }

                if (res.affectedRows == 0) {
                    // not found user with the id
                    result({ kind: "not_found" }, null);
                    return;
                }

                console.log("updated user: ", { id: id, ...user });
                result(null, { id: id, ...user });
            }
        );
    }
    // Delete user
    static delete(id, result) {
        sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found user with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("deleted user with id: ", id);
            result(null, res);
        });
    }
}






module.exports = User;

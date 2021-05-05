'use strict'

const express = require('express');
const router = express.Router();

const user = require("../controllers/user.controller.js");

router.post("/user", user.create);
router.get("/user/:userId", user.findById);
router.get("/user", user.getAll);
router.put("/user/:userId", user.update);
router.delete("/user/:userId", user.delete);

module.exports = router;

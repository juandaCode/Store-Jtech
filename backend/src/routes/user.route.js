"use strict";

const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const addUser = require('../controllers/user.controller');
const User = require('../models/user.model');


router.get("/users", async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});
 /*  const { id } = req.params;
  res.json({
    id,
    "name": "Juan",
    "lastname": "Zuluaga",
    "document": "1045022754",
    "adress": {
      "street": "Calle falsa 123",
      "city": "Bogotá"
    }
  }) */


router.post("/users", addUser);


module.exports = router;

// const mongoDb = require('mongoose');
// const db = require('../models/database'),
//     users = require('../models/users');

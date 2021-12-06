"use strict";
const express = require('express');
const router = express.Router();
// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));

const userController = require('../controllers/user.controller');
/* router.get("/users", async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
}); */
router.get('/users', userController.getUsers);
router.post("/users", userController.addUser);


module.exports = router;

// const mongoDb = require('mongoose');
// const db = require('../models/database'),
//     users = require('../models/users');

/*  const { id } = req.params;
  res.json({
    id,
    "name": "Juan",
    "lastname": "Zuluaga",
    "document": "1045022754"
    }
  }) */

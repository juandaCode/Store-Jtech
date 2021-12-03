"use strict";

const User = require('../models/user.model');

var UserService = require('../services/user.service')

const getUsers = async function (req, res) {
    // Validate request parameters, queries using express-validator
  let page = req.params.page ? req.params.page : 1;
  let limit = req.params.limit ? req.params.limit : 10;
  try {
      let users = await UserService.getUsers({}, page, limit)
      return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}


const addUser =  async (req, res) => {
  const user= User(req.body);
  const userAdded = await user.save();
  console.log(userAdded);
  res.send("User added");
  //res.redirect("/users");
};

module.exports = { getUsers, addUser };

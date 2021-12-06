"use strict";
const UserService = require('../services/user.service')

const getUsers = async function (req, res) {
    // Validate request parameters, queries using express-validator
  let page = req.params.page ? req.params.page : 1;
  let limit = req.params.limit ? req.params.limit : 20;
  try {
      let users = await UserService.getUsers({}, page, limit)
      return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
  }
};
const addUser =  async (req, res) => {
  try {
    const data = req.body;
    let userCreated = await UserService.addUser(data);
    return res.status(201).json({ status: 201, data: userCreated, message: "Succesfully User created" });
    //res.redirect("/users");
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    let userUpdated = await UserService.updateUser(id, data);
    return res.status(200).json({ status: 200, data: userUpdated, message: "Succesfully Users updated"});
  } catch (error) {
      return res.status(400).json({ status: 400, message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    let userDeleted = await UserService.deleteUser(id);
    return res.status(200).json({ status: 200, data: userDeleted, message: "Succesfully User deleted" });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };

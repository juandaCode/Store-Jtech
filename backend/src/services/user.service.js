"use strict";
const User = require('../models/user.model')

const getUsers = async (query) => {
    try {
        let users = await User.find(query);
        return users;
    } catch (error) {
        throw Error('It is not possible to list the users');
    }
}
const addUser = async (user) => {
    try {
        let newUser = new User(user);
        let userSaved = await newUser.save();
        return userSaved;
    } catch (error) {
        throw Error('It is not possible to add the user');
    }
}
const updateUser = async (id, user) => {
    try {
        let userUpdated = await User.findByIdAndUpdate(id, user);
        return userUpdated;
    } catch (error) {
        throw Error('It is not possible to update the user');
    }
}
const deleteUser = async (id) => {
    try {
        let userDeleted = await User.findByIdAndRemove(id);
        return userDeleted;
    } catch (error) {
        throw Error('It is not possible to delete the user');
    }
}

module.exports = {getUsers, addUser, updateUser, deleteUser};

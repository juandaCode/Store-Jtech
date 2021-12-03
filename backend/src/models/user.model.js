const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  cellPhone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }

});

const modelUser = mongoose.model('User', userSchema);

module.exports = modelUser;

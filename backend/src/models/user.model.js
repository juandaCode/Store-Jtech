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
  },
  identification: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    city: {
      type: String,
      required: true,
      trim: true
    },
    street: {
      type: String,
      required: true,
      trim: true
    }
  }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;

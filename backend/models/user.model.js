const Joi = require('joi');
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const getAvatar = require('../helpers/avatar');
console.log(getAvatar, 'this is a sample of the users avatar...');

//create the mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    minlength: 8,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  avatar: {
    type: String,
    default: getAvatar(this.email)
  },
  timestamps: true
});

//ensures that we don't have duplicate users in the database....
userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel


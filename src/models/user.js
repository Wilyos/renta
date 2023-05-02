//import mongoose from 'mongoose';
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: String,
  name: String,
  password:String,
  /*status: {
    type: Boolean,
    default: false
  }*/
});

module.exports = mongoose.model('user', userSchema);
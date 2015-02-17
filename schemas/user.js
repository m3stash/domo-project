'user strict';

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  password : String,
  date : { type : Date, default : Date.now }
});

module.exports = mongoose.model('User', userSchema); 

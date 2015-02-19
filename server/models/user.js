'user strict';

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
	local: {
		login: { type : String, match: /^[a-zA-Z0-9-_]+$/ },
		pwd: String,
		name: String,
		firstname: String,
		email: String,
		date: { type : Date, default : Date.now }
	}
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema); 

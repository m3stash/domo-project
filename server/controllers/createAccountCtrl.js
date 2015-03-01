'user strict';
var User = require('../models/user');

exports.createAccountIndex = function(req, res){
	res.sendfile('app/assets/partials/createAccount.html')
}

exports.createAccountStep1 = function(req, res){
	var newUser = new User({name: req.body.name, firstName: req.body.firstName, login: req.body.login, pwd: req.body.pwd, email: req.body.email });
	newUser.save();
	User.findOne('local.login', function(err, user) {
		console.log('useExist',err, user)
		/*newUser.save(function(){
			console.log('ok save')
			//res.redirect('/');
		});*/
	});
};

exports.verifEmail = function(req, res){
		var userError = 'invalid user';
		User.findOne({ 'local.email' : req.body.email}, function(err, user) {
		console.log("l'email existe il?",err, user)
		/*newUser.save(function(){
			console.log('ok save')
			//res.redirect('/');
		});*/
		if(!user){
			console.log('erreur')
			res.status(200).send(false)
		} else {
			res.status(200).send(true);
		}
	});
}

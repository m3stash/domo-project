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

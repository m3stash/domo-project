'user strict';
var User = require('../models/user');

exports.createAccountIndex = function(req, res){
	res.sendfile('app/assets/partials/createAccount.html')
}

exports.createAccountStep1 = function(req, res){
	console.log('-----',req.body);
	//voir a cabler passport
	/*var newUser = new User.create(UserSchemas, function(err, creatUser){
		//creatUser.name = req.body.name
		//creatUser.firstName = req.body.firstName
		//creatUser.email = req.body.email
	});*/
	
	//var newUser = new User({name: req.body.name, firstName: req.body.firstName});
	//var newUser = new User(req.body);
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

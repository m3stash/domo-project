'user strict';

exports.createAccountIndex = function(req, res){
	res.sendfile('app/assets/partials/createAccount.html')
}

var User = require('./schemas/user');
exports.createAccountStep1 = function(req, res){
	console.log(req.body);
	//voir a cabler passport
	/*var newUser = new User.create(UserSchemas, function(err, creatUser){
		//creatUser.name = req.body.name
		//creatUser.firstName = req.body.firstName
		//creatUser.email = req.body.email
	});*/
	
	/*var newUser = new User.create(objetAcreer){
		newUser.save(function(){
		res.redirect('/');
	});/
};

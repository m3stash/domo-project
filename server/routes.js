'user strict';

module.exports = function(app, passport){
	
	var loginCtrl = require('./controllers/loginCtrl');
	
	app.get('/login', loginCtrl.index);
	app.get('/login/createAccount', loginCtrl.createAccount);
	
	app.post('/login', loginCtrl.login);

}
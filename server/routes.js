'user strict';

module.exports = function(app, passport){
	
	var loginCtrl = require('./controllers/loginCtrl');
	var createAccountCtrl = require('./controllers/createAccountCtrl');
	
	app.get('/login', loginCtrl.index);
	app.get('/createAccount', createAccountCtrl.createAccountIndex);
	
	app.post('/login', loginCtrl.login);
	app.post('/createAccount', createAccountCtrl.createAccountStep1);

}
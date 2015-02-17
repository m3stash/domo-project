'user strict';

module.exports = function(app, passport){
	
	var loginCtrl = require('./controllers/loginCtrl');
	
	app.get('/', loginCtrl.index);
	
	app.post('/login', loginCtrl.login);

}
'user strict';

module.exports = function(app, passport){
	
	var loginCtrl = require('./controllers/loginCtrl');
	app.get('/login', loginCtrl.index);
	//app.post('/signup', passport.authenticate('local-signup') , loginCtrl.signup);
	//app.post('/login', loginCtrl.signup);
	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/succesredirect', // redirect to the secure profile section
        failureRedirect : '/failureRedirect', // redirect back to the signup page if there is an error
    }));

	var createAccountCtrl = require('./controllers/createAccountCtrl');
	app.get('/createAccount', createAccountCtrl.createAccountIndex);
	app.post('/createAccount', createAccountCtrl.createAccountStep1);

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
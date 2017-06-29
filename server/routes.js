'user strict';

module.exports = function(app, passport, btSerial){
	var loginCtrl = require('./controllers/loginCtrl');
	app.get('/login', loginCtrl.index);
    app.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/loginSuccess',
            failureRedirect: '/loginFailure'
        })
    );

    app.get('/loginFailure', function(req, res, next) {
        res.status(401).end('error');
    });

    app.get('/loginSuccess', function(req, res, next) {
        res.status(200).end('succes');
    });

	var createAccountCtrl = require('./controllers/createAccountCtrl');
    app.get('/createAccount', createAccountCtrl.createAccountIndex);
    app.post('/createAccount', passport.authenticate('local-signup') , function(req, res) {
        //res.send(req.user);
    });
    app.post('/verifEmail', createAccountCtrl.verifEmail);

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    var bluetooth = require('./libs/btSerial');
    app.get('/scanBluetooth', function(req, res){
        bluetooth(btSerial, req, res)
    });

}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    console.log('eq, res, next',req, res, next)
    /*console.log('1',req)
    console.log('2',res)
    console.log('3',req)*/
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
        console.log('OUI loggeds')
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}

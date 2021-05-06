// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
// load up the user model
var User = require('../models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'pwd',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, pwd ,done) {
        User.findOne({ 'local.email' :  email }, function(err, user) {
            console.log('---ERR---',err)
            // if there are any errors, return the error
            if (err){
                console.log('error 1')
                return done(err);
            }
            // check to see if theres already a user with that email
            if (user) {
                return done('existing email', false, null);
            } else {
                // if there is no user with that email
                var newUser = new User();
                newUser.local.email = email;
                newUser.local.pwd = newUser.generateHash(pwd); // use the generateHash function in our user model
                newUser.local.name = req.body.name;
                newUser.local.firstname = req.body.firstName;
                // save the user
                newUser.save(function(err) {
                    if (err){
                        throw err;
                    }
                    return done(null, newUser);
                });
            }

        });

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'pwd',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, pwd, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err){
                console.log('ERROR - ',err)
                return done(err);
            }

            // if no user is found, return the message
            if (!user){
                console.log('ERROR 2 - ',err)
                return done(null, false, null); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong

            if (!user.validPassword(pwd)){
                console.log('ERROR 3 - ',err, pwd)
                return done(null, false, null); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, user);
        });

    }));

};

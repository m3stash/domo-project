// set up ========================
var express  = require('express');
var app = express();                              // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan   = require('morgan');             // log requests to the console (express4)
var http     = require('http');
var url      = require('url');
var passport = require('passport')
	, LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

// mongo connect =================
mongoose.connect('mongodb://mongoLogin:admin@ds043991.mongolab.com:43991/domo-project-db');     // connect to mongoDB database on modulus.io
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('connection ok calback ->', callback)
});

// models & schemas ======================================================================

//app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname, '/bower_components'));
//app.use(express.static(__dirname + 'public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

//routes app ======================================
require('./server/routes')(app, passport);

// listen (start app with node server.js) ======================================
/*var server = http.createServer(app).listen(9000, function (request, response) {
    console.log('listening on port 9000');
});*/
app.listen(9000);


// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var http = require('http');
    var url = require('url');
    var passport = require('passport')
    //var passport-local = require('passport-local')
    var http = require('http');
    //var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    //var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================


    //mongoose.connect('mongodb://LduProject:MongoDb59650@ds053080.mongolab.com:53080/projectdb');     // connect to mongoDB database on modulus.io
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    //app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    //app.use(bodyParser.json());                                     // parse application/json
    //app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    //app.use(methodOverride());
    //console.log('mongo->',mongoose)

    // routes ======================================================================

    //routes app ======================================
    app.get('/', function(req, res) {
       res.sendfile('app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
        console.log('res')
    });

    app.get('/test', function(req, res) {
        console.log('test route');
    });


    app.listen(8080);

    // listen (start app with node server.js) ======================================
    //app.listen(8080);


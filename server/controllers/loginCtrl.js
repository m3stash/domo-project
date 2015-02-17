'user strict';

exports.index = function(req, res){
    res.sendfile('app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
};

exports.login = function(req, res){
	console.log('test ->',req.body);
	res.status(200).end();
};
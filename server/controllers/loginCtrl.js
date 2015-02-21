'user strict';

exports.index = function(req, res){
    res.sendfile('app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
};

/*exports.signup = function(req, res){
	console.log('req----->',req.body)
	//console.log('test ->',req.body);
	//console.log('ICI',successRedirect)
	//successRedirect : '/profile', // redirect to the secure profile section
    //failureRedirect : '/signup', // redirect back to the signup page if there is an error
	//res.status(200).end();
};*/
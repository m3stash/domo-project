'use strict';
domoProjectApp.controller('LoginCtrl',  ['$scope', '$http', '$location', function ($scope, $http, location){
	
	$scope.closeAlertLogin = function(){
		$scope.error=null;
	};

	$scope.formConnection = function(form){
<<<<<<< HEAD
		$http.post('/login', 'username=' + form.login + '&password=' + form.mdp, {
=======
		$http.post('intractiv-rest-api/login', 'username=' + form.login + '&password=' + form.mdp + '&submit=Login', {
>>>>>>> b3277920bd5d5aba173c6e9bd7ea6a49588bce22
			headers : {
				"Content-Type": "application/x-www-form-urlencoded"
			}
		}).success(function(response){
			console.log('succes', response)
			//pour l'instant, version simple, on recharge la page après le login
			// if(){
			// 	$location.path('/home');
			// }else{
			// 	$location.path('/');
			// }
		}).error(function(response){
			console.log('error', response)
			//$scope.listError["login"]=$.i18n.prop('login.msg-error');
		});
	};
	
}]);
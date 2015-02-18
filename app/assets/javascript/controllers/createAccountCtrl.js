'use strict';

domoProjectApp.controller('CreateAccountCtrl', ['$scope', '$http', '$location', function ($scope, $http, location){
	$scope.creatAccountObj = {}
	$scope.valid = function(step){
		if(step == "step1"){
			$http.post('/createAccount',$scope.creatAccountObj).success(function(response){
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
		}
	};
}]);
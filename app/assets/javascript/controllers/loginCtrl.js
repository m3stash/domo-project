'use strict';
domoProjectApp.controller('LoginCtrl',  ['$scope', '$http', '$location', function ($scope, $http, location){
	
	$scope.closeAlertLogin = function(){
		$scope.error=null;
	};
	$scope.loginObj = {}
	/*$scope.formConnection = function(){
		// $http({
		// 		method : 'POST',
		// 		url : '/login',
		// 		data: $scope.loginObj
		// 	})
		$http.post('/login',$scope.loginObj).success(function(response){
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
	};*/

	$scope.formConnection = function(){
		console.log('co');
		$http.get('/scanBluetooth').success(function(res){
			console.log('succes',res)
		}).error(function(res){
			console.log('error',res)
		})
	}
	
}]);
'use strict';
domoProjectApp.controller('SandboxCtrl',  ['$scope', '$http', '$location', function ($scope, $http, location){
	
	$scope.scan = function(){
		$http.get('/scanBluetooth').success(function(response){
			console.log('succes B', response)
			//pour l'instant, version simple, on recharge la page après le login
			// if(){
			// 	$location.path('/home');
			// }else{
			// 	$location.path('/');
			// }
		}).error(function(response){
			console.log('error B', response)
			//$scope.listError["login"]=$.i18n.prop('login.msg-error');
		});
	}
	
}]);
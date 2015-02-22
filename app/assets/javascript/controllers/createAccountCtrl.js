'use strict';

domoProjectApp.controller('CreateAccountCtrl', ['$scope', '$http', '$location', function ($scope, $http, location){
	$scope.creatAccountObj = {}
	$scope.error = {};
	$scope.$watch(function() {
		$scope.stepObj = [
			{
				data : [
					{name: 'creatAccountObj.name', value: $scope.creatAccountObj.name, errorType: ['void']},
					{name: 'creatAccountObj.firstName', value: $scope.creatAccountObj.firstName, errorType: ['void']},
					{name: 'creatAccountObj.email', value: $scope.creatAccountObj.email, errorType: ['void','email']},
					{name: 'creatAccountObj.pwd', value: $scope.creatAccountObj.pwd, errorType: ['void']}
				]
			}
		];
	});

	//check the list of error for this step
	$scope.verifyFn = function(stepNumber, activeBlur){
		console.log($scope.stepObj.length)
		// var blur = false;
		// if(activeBlur){

		// }
		var obj = $scope.stepObj[stepNumber].data;
		for(var i=0; i<obj.length; i++){
			$scope.errorType(obj[i])
		}
	}

	
	var checkVoid = function(obj){	
		if(obj.value == null){
			$scope.error[obj.name] = true
			$scope.error[obj.name+'.error'] = $.i18n.prop('error.void');
		}else{
			$scope.error[obj.name] = false;
		}
	}

	var checkEmail = function(obj){
		if(obj.value != null){
		}
	}

	//for every possible error, launch the funtion associted
	$scope.errorType = function(obj){
		for(var i=0; i<obj.errorType.length; i++){
			switch(obj.errorType[i]) {
			    case 'void': 
			        checkVoid(obj);
			        break;
			    case 'email':
			    	checkEmail(obj);
			        break;
			    default:
			}
		}
	}

	//console.log('---',$scope.creatAccountObj.name.match("^([a-z]+(( |')[a-z]+)*)+([-]([a-z]+(( |')[a-z]+)*)+)*$"))
	$scope.valid = function(step){
		var step = parseInt(step);
		//verifIfError($scope.error, step);
		if(step == 1){
			// if($scope.creatAccountObj.name == null){
			// 	$scope.error[step].push({name : 'name', error : true});
			// 	$scope.error['creatAccountObj.name.errorType'] = $.i18n.prop('error.void');
			// }else{
			// 	$scope.error['creatAccountObj.name.error'] = false;
			// }
			// if($scope.creatAccountObj.firstName == null){
			// 	$scope.error[step].push({name : 'firstName', error : true});
			// 	//$scope.error['creatAccountObj.firstName.error'] = true;
			// 	$scope.error['creatAccountObj.firstName.errorType'] = $.i18n.prop('error.void');
			// }else{
			// 	$scope.error['creatAccountObj.firstName.error'] = false;
			// }
			// if($scope.creatAccountObj.email == null){
			// 	$scope.error['creatAccountObj.email.error'] = true;
			// 	$scope.error['creatAccountObj.email.errorType'] = $.i18n.prop('error.void');
			// }else{
			// 	$scope.error['creatAccountObj.email.error'] = false;
			// }
			// if($scope.creatAccountObj.pwd == null){
			// 	$scope.error['creatAccountObj.pwd.error'] = true;
			// 	$scope.error['creatAccountObj.pwd.errorType'] = $.i18n.prop('error.void');
			// }else{
			// 	$scope.error['creatAccountObj.pwd.error'] = false;
			// }

			/*if(!$scope.disableButton){
				$http.post('/createAccount',$scope.creatAccountObj).success(function(response){
				console.log('succes', response)
				//pour l'instant, version simple, on recharge la page après le login
				// if(){
				// 	$location.path('/home');
				// }else{
				// 	$location.path('/');
				// }
				}).error(function(response){
					if(response.trim() == 'existing email'){
						$scope.error['creatAccountObj.email.error'] = true
						$scope.error['creatAccountObj.email.errorType'] = $.i18n.prop('error.existingEMail');
					}
				});
			}*/
		}
	}

}]);
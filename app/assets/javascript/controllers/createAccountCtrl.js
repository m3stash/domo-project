'use strict';

domoProjectApp.controller('CreateAccountCtrl', ['$scope', '$http', '$location', function ($scope, $http, location){
	$scope.creatAccountObj = {}
	$scope.error = {};
	$scope.reduct = {};
	$scope.btnStep = [];
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
		if(activeBlur){
			$scope.btnStep[stepNumber] = activeBlur;
		}
		if($scope.btnStep[stepNumber]){
			var obj = $scope.stepObj[stepNumber].data;
			for(var i=0; i<obj.length; i++){
				$scope.errorType(stepNumber, obj[i]);
			}
		}
	}

	var checkVoid = function(obj){	
		if(obj.value == null || obj.value == ''){
			$scope.error[obj.name] = true
			$scope.error[obj.name+'.error'] = $.i18n.prop('error.void');
			return true;
		}else{
			$scope.error[obj.name] = false;
			return false;
		}
	}

	var checkEmail = function(obj){
		if(obj.value != null){
			var email = {email: obj.value}
			$scope.reduct[obj.name] = true;
			$scope.showloaderEmail = true;
			$http.post('/verifEmail', email).success(function(res){
				if(res == true){
					$scope.error[obj.name+'.error'] = $.i18n.prop('error.emailExist');
					$scope.error[obj.name] = true;
					$scope.reduct[obj.name] = false;
					$scope.showloaderEmail = false;
					return true;
				}else{
					$scope.error[obj.name] = false;
					$scope.reduct[obj.name] = false;
					$scope.showloaderEmail = false;
					return false;
				}
			}).error(function(res){
				console.log('err email', res)
				$scope.reduct[obj.name] = false;
				$scope.showloaderEmail = false;
			})
		}
	}

	//for every possible error, launch the funtion associted
	$scope.errorType = function(stepNumber, obj){
		var err = false;
		for(var i=0; i<obj.errorType.length; i++){
			switch(obj.errorType[i]) {
			    case 'void': 
			        if(checkVoid(obj)){
			        	err = true;
			        }
			        break;
			    case 'email':
			    	if(checkEmail(obj)){
			    		err = true
			    	}
			        break;
			    default:
			}
		}
		if(err){
			$scope.disableButton = true;
		}else{
			$scope.disableButton = false;
			$scope.valid(stepNumber);
		}
			
	}

	//console.log('---',$scope.creatAccountObj.name.match("^([a-z]+(( |')[a-z]+)*)+([-]([a-z]+(( |')[a-z]+)*)+)*$"))
	$scope.valid = function(step){
		if(step == 0){
			$scope.animateStep = true;
			$scope.stepNumber = step;
			// $http.post('/createAccount',$scope.creatAccountObj).success(function(response){
			// 	if(){
					
			// 	}else{
					
			// 	}
			// }).error(function(response){
			// 	console.log('err step 1 serveur')
			// });
		}
	}

}]);
var directives = angular.module('directives', []);
directives.directive('stepAnimate', function(){
	return {
		restrict: 'A',
		scope: {
			stepNumber: '@',
			incrementType: '@'
		},
		link: function($scope, element, attrs){

			var stepWidth = $(element).context.clientWidth;
			$(element).css('width', stepWidth * $scope.stepNumber);
			$(element).children('.ctn-step').css('width', stepWidth);
			var margin = 0;
			var currentStep = 1;
			$scope.$watch('incrementType', function(){
				if($scope.incrementType == 'add'){
					if(currentStep <= parseInt($scope.stepNumber)){
						currentStep++;
						margin -= stepWidth;
						$(element).children('.ctn-step').css('margin-left', margin)
					}
				}else if($scope.incrementType == 'min'){

				}
			});
		}
	};
});

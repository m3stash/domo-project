var directives = angular.module('directives', []);
directives.directive('stepAnimate', function(){
	return {
		restrict: 'A',
		scope: {
			animate: '='
		},
		link: function($scope, element, attrs){
			$scope.$watch('attrs', function(){
				console.log(attrs)
			})
           	console.log('ici', attrs)
           	// $scope.$watch('attrs', function(attrs){
           	// 	console.log(attrs)
           	// })
           	// console.log($scope.animate)
           	console.log('animate',$scope.animate)
		}
	};
});

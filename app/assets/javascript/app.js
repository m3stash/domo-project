'use strict';

/**
* @ngdoc overview
* @name domoProjectApp
* @description
* # domoProjectApp
*
* Main module of the application.
*/
var domoProjectApp = angular
.module('domoProjectApp', [
 	'ngAnimate',
 	'ngCookies',
 	'ngResource',
 	'ngRoute',
 	'ngSanitize',
 	'ngTouch',
 	'ui.bootstrap'
 	])
.config(function ($routeProvider) {
 	$routeProvider
 	.when('/', {
 		templateUrl: 'assets/partials/login.html',
 		controller: 'LoginCtrl'
 	})
 	.otherwise({
 		redirectTo: '/'
 	});
})
.run(function($rootScope, $window) {
 	// $rootScope.Messages = $rootScope._i = function(code){
 	// 	return $.i18n.prop.apply(null, arguments);
 	// };
 	// $rootScope.userInfos = window.userInfos;
 	// $rootScope.newMap = {};
 	// $rootScope.copyMap = {};
 	// $rootScope.injectDraft = false;
 	// $rootScope.keyDraft = '';

 	// $rootScope.inject = function(key){
 	// 	$rootScope.injectDraft = true;
 	// 	$rootScope.keyDraft = key;
 	// };  

 	// $rootScope.historic = function(key, value){
 	// 	if($rootScope.inject){

 	// 	}
 	// 	if($rootScope.injectDraft){
 	// 		$rootScope.newMap[key] = ($rootScope.listDraft[$rootScope.keyDraft]).newMap[key];
 	// 		$rootScope.copyMap[key] = angular.copy(($rootScope.listDraft[$rootScope.keyDraft]).newMap[key]);
 	// 		return ($rootScope.listDraft[$rootScope.keyDraft]).newMap[key];
 	// 	}else{
 	// 		$rootScope.newMap[key] = value;
 	// 		$rootScope.copyMap[key] = angular.copy(value);
 	// 		return value;
 	// 	}
 	// };
});


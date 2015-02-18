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
 	'ui.bootstrap',
 	])
.config(function ($routeProvider) {
 	$routeProvider
 	.when('/login', {
 		templateUrl: 'assets/partials/login.html',
 		controller: 'LoginCtrl'
 	})
 	.when('/createAccount', {
 		templateUrl: 'assets/partials/createAccount.html',
 		controller: 'CreateAccountCtrl'
 	})
 	.otherwise({
 		redirectTo: '/login'
 	});
})
.run(function($rootScope, $window, $cookies) {
	//local gestion
	$rootScope.Messages = $rootScope._i = function(code){
        return $.i18n.prop.apply(null, arguments);
   };
	var localLang;
	if($cookies.lang != null){
		localLang = $cookies.lang;
	}else{
		localLang = (navigator.browserLanguage? navigator.browserLanguage : navigator.language);
		$rootScope.defaultLang = localLang.substring(0,2);
		$cookies.lang = localLang.substring(0,2);
	}
	$.i18n.properties({
		name: 'messages',
		path: 'assets/messages/',
		mode: 'map',
		cache: true,
		language: localLang
	});

});


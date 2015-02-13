'use strict';

/**
 * @ngdoc function
 * @name domoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the domoProjectApp
 */
angular.module('domoProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

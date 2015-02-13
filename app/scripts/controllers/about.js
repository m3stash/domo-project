'use strict';

/**
 * @ngdoc function
 * @name domoProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the domoProjectApp
 */
angular.module('domoProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

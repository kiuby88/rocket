'use strict';

/**
 * @ngdoc function
 * @name rocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rocketApp
 */
angular.module('rocketApp')
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      $scope.navClass= 'navbar navbar-default navbar-fixed-top';

    }]);

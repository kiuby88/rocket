'use strict';

/**
 * @ngdoc function
 * @name rocketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rocketApp
 */
angular.module('rocketApp')
  .config(function () {
    new WOW().init();
  })
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);

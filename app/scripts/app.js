'use strict';

/**
 * @ngdoc overview
 * @name rocketApp
 * @description
 * # rocketApp
 *
 * Main module of the application.
 */
angular
  .module('rocketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    //new WOW().init();
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

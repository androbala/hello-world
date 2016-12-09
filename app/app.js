'use strict';

// Declare app level module which depends on views, and components
angular.module('helloApp', [
  'ngRoute',
  'helloApp.say_hello'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/hello'});
}]);

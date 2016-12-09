'use strict';
//declare say_hello module
angular.module('helloApp.say_hello', ['ngRoute'])
//route configuration of say_hello module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hello', {
    templateUrl: 'say_hello/say_hello.html',
    controller: 'helloCtrl'
  });
}])
//define controller and initialize message property
.controller('helloCtrl', ["$scope",function($scope) {
  $scope.message = "World";
}]);
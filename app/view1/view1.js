'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope, $http) {
  //$scope.test = "angular sucks ballsacks";


  $http.get('http://52.53.202.129:3000/top100').
  success(function(data, status, headers, config) {
    $scope.entconn2 = data;
  }).
  error(function(data, status, headers, config) {
    // log error
  });



}]);

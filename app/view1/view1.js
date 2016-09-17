'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  //$scope.test = "test";
  //the above works when I bind in view1.html

  $http.get('http://52.53.202.129:3000/top100').
  success(function(response) {
    $scope.information = response;
  });

}]);

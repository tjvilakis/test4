'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.test = "angular sucks ballsacks";

  app.service('hexafy', function() {
    this.myFunc = function (x) {
      return x.toString(16);
    }
  });

  $scope.hex = hexafy.myFunc(255);

}]);

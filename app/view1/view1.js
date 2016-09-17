'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope, $http) {
    $http.get("http://52.53.202.129:3000/top100")
        .then(function(response) {
          $scope.top100 = response.data;
        });
  });
}]);
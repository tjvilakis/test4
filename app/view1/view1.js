'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
      factory: 'jsonFactory'
  });
}])

.factory('jsonFactory', function ($q, $http) {
  return {
    getOtherStuff: function () {
      var deferred = $q.defer(),
          httpPromise = $http.get('http://52.53.202.129:3000/top100');

      httpPromise.then(function (response) {
        deferred.resolve(response);
      }, function (error) {
        console.error(error);
      });

      return deferred.promise;
    }
  };
})

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
  //$scope.test = "test";
  //the above works when I bind in view1.html
  $scope.otherStuff = {};
  jsonFactory.getOtherStuff()
      .then(function (response) {
        $scope.otherStuff = response.data.components;
      }, function (error) {
        console.error(error);
      });
}]);

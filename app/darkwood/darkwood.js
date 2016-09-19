'use strict';

angular.module('darkwood', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/darkwood', {
            templateUrl: 'darkwood/darkwood.html',
            controller: 'darkwoodCtrl'
        });
    }])

    .controller('darkwoodCtrl', ['$scope', '$http', function($scope, $http) {
        //$scope.test = "test";

        $scope.information = [];
        //the above works when I bind in darkwood.html

        $http.get('http://52.53.202.129:3000/darkwood')
            .then(function (response) {
                // Success
                //angular.copy(response.data, $scope.information);
                $scope.information = response.data;

            }, function () {
                //console.error(error);
            });

        /*
        $http({
            method: 'GET',
            url: 'http://52.53.202.129:3000/top100'
            //dataType: 'jsonp'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            angular.copy(response.data, $scope.information);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
         */


    }]);
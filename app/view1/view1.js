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

        $scope.information = [];
        //the above works when I bind in view1.html
        /*
        $http.get('http://52.53.202.129:3000/top100')
            .then(function (response) {
                // Success
                angular.copy(response.data, $scope.information);

            }, function () {
                //console.error(error);
            });
         */

        $http({
            method: 'GET',
            url: 'http://52.53.202.129:3000/top100',
            dataType: 'jsonp'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            angular.copy(response.data, $scope.information);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    }]);
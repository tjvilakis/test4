'use strict';

angular.module('Landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view2', {
        templateUrl: 'Landing/Landing.html',
        controller: 'Landing'
      });
    }])

    .controller('Landing', [function() {

    }]);
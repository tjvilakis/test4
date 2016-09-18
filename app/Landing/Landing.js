'use strict';

angular.module('Landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/Landing', {
        templateUrl: 'Landing/Landing.html',
        controller: 'Landing'
      });
    }])

    .controller('Landing', [function() {

    }]);
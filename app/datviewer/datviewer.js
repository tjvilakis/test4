'use strict';

angular.module('datviewer', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/datviewer', {
        templateUrl: 'datviewer/datviewer.html',
        controller: 'datviewer'
      });
    }])

    .controller('datviewer', [function() {

    }]);
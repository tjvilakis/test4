'use strict';

angular.module('datviewer', ['ngRoute'])

    .config(['datviewer', function($routeProvider) {
      $routeProvider.when('/datviewer', {
        templateUrl: 'datviewer/datviewer.html',
        controller: 'datviewer'
      });
    }])

    .controller('datviewer', [function() {

    }]);
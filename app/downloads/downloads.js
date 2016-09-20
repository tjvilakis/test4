'use strict';

angular.module('downloads', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/downloads', {
    templateUrl: 'downloads/downloads.html',
    controller: 'downloadsCtrl'
  });
}])

.controller('downloadsCtrl', [function() {

}]);
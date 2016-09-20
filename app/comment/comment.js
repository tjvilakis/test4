'use strict';

angular.module('comment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comment', {
    templateUrl: 'comment/comment.html',
    controller: 'commentCtrl'
  });
}])

.controller('commentCtrl', [function() {

}]);
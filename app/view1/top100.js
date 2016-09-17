/**
 * Created by Castor on 9/17/2016.
 */
var app = angular.module('myApp', []);

app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.controller('myCtrl', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});
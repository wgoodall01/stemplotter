'use strict';

var app = angular.module('stemPlotter', []);

app.controller('plotCtrl', function ($scope, $http) {
  $scope.updatePlot = function () {
    var lines = $scope.input.length == 0 ? [] : $scope.input.split("\n");

    $scope.plot = {};
    for (var l in lines) {
      var num = parseInt(lines[l]);
      var leaf = Math.abs(num % 10);
      var stem = Math.floor(num / 10);

      if (num < 0 && num > -10) {
        stem = "-0";
      }

      if ($scope.plot.hasOwnProperty(stem)) {
        $scope.plot[stem] += "  " + leaf;
      } else {
        $scope.plot[stem] = "" + leaf;
      }

      console.dir($scope.plot);
    }
  };
});
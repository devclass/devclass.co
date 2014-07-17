angular.module('admin')
.controller('ApplicationCtrl', function ($scope, $timeout) {
  $scope.$on('error', function (_, error) {
    $scope.error = error
    $timeout(function () {
      $scope.error = null
    }, 5000)
  })
})

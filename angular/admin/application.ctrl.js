angular.module('admin')
.controller('ApplicationCtrl', function ($scope, $timeout, $window, $http, $location) {
  var token = $location.search().token || $window.localStorage.devclassToken
  if (token) {
    $window.localStorage.devclassToken = token
    $http.defaults.headers.common['x-auth'] = token
  } else {
    $window.location.href = '/github/auth'
  }
  $scope.$on('error', function (_, error) {
    $scope.error = error
    $timeout(function () {
      $scope.error = null
    }, 5000)
  })
})

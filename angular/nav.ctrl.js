angular.module('app')
.controller('NavCtrl', function ($scope, $location, $anchorScroll) {
  $scope.scrollTo = function (location) {
    $location.hash('courses')
    $anchorScroll()
  }
})

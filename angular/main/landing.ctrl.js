angular.module('app')
.controller('LandingCtrl', function ($scope, CourseSvc) {
  CourseSvc.fetch().success(function (courses) {
    $scope.courses = courses
  })
})

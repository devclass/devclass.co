angular.module('app')
.controller('LandingCtrl', function ($scope, CourseSvc) {
  $scope.courses = CourseSvc.courses
})

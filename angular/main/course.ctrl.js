angular.module('app')
.controller('CourseCtrl', function ($scope, $routeParams, CourseSvc) {
  CourseSvc.find($routeParams.slug).success(function (course) {
    $scope.course = course
  })
})

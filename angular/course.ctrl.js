angular.module('app')
.controller('CourseCtrl', function ($scope, $routeParams, CourseSvc) {
  $scope.course = CourseSvc.courses[$routeParams.slug]
})

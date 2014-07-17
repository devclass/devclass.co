angular.module('admin')
.controller('CourseListCtrl', function ($scope, CourseSvc) {
  CourseSvc.fetch().success(function (courses) {
    $scope.courses = courses
  })
})

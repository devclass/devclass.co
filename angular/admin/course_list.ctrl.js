angular.module('admin')
.controller('CourseListCtrl', function ($scope, CourseSvc) {

  function reload () {
    CourseSvc.fetch().success(function (courses) {
      $scope.courses = courses
    })
  }
  reload()

  $scope.createCourse = function (course) {
    CourseSvc.create(course).success(function () {
      reload()
    })
  }
})

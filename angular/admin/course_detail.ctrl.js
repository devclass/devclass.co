angular.module('admin')
.controller('CourseDetailCtrl', function ($scope, $routeParams, CourseSvc) {
  CourseSvc.find($routeParams.slug).success(function (course) {
    $scope.course = course
  })

  $scope.update = function (course) {
    CourseSvc.update(course).success(function (course) {
      $scope.editing = false
      $scope.course = course
    }).error(function (err) {
      $scope.$emit('error', err)
    })
  }

  $scope.createFeature = function (feature) {
    CourseSvc.createFeature($scope.course, feature).success(function (feature) {
      $scope.course.features.push(feature)
    }).error(function (err) {
      $scope.$emit('error', err)
    })
  }
})

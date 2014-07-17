angular.module('admin')
.controller('CourseDetailCtrl', function ($scope, $routeParams, CourseSvc) {
  function reload() {
    CourseSvc.find($routeParams.slug).success(function (course) {
      $scope.course = course
    })
  }
  reload()

  $scope.update = function (course) {
    CourseSvc.update(course).success(function (course) {
      $scope.editing = false
      $scope.course = course
    }).error(function (err) {
      $scope.$emit('error', err)
    })
  }

  $scope.createFeature = function (feature) {
    CourseSvc.createFeature($scope.course, feature).success(function () {
      reload()
      $scope.feature = null
    }).error(function (err) {
      $scope.$emit('error', err)
    })
  }

  $scope.deleteFeature = function (feature) {
    CourseSvc.deleteFeature($scope.course, feature).success(function () {
      $scope.feature = feature
      reload()
    })
  }
})

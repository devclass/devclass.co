angular.module('admin')
.service('CourseSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/admin/courses')
  }
})

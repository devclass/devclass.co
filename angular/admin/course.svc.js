angular.module('admin')
.service('CourseSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/admin/courses')
  }

  this.find = function (slug) {
    return $http.get('/api/admin/courses/' + slug)
  }

  this.create = function (course) {
    return $http.post('/api/admin/courses', course)
  }

  this.update = function (course) {
    return $http.put('/api/admin/courses/' + course.slug, course)
  }

  this.createFeature = function (course, feature) {
    return $http.post('/api/admin/courses/' + course.slug + '/features', feature)
  }
})

angular.module('admin')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'CourseListCtrl',
    templateUrl: 'course_list.html'
  })
  .when('/courses/:slug', {
    controller: 'CourseDetailCtrl',
    templateUrl: 'course.html'
  })
  .otherwise({redirectTo: '/'})
})

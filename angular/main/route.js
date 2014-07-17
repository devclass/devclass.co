angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $locationProvider.hashPrefix('!')
  $routeProvider
  .when('/', {
    controller: 'LandingCtrl',
    templateUrl: 'landing.html'
  })
  .when('/courses/:slug', {
    controller: 'CourseCtrl',
    templateUrl: 'course.html'
  })
  .otherwise({redirectTo: '/'})
})

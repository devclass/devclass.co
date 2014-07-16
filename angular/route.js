angular.module('app')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $locationProvider.hashPrefix('!')
  $routeProvider
  .when('/', { templateUrl: 'landing.html' })
  .otherwise({redirectTo: '/'})
})

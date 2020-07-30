'use strict';

// Declare app level module which depends on views, and components
angular.module('pr0texter', [
  'ngRoute',
  'pr0texter.pr0texter',
  'pr0texter.about',
  'pr0texter.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/pr0texter'});
}]);

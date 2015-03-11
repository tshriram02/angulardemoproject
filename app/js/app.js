'use strict';
var app = angular.module('myApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'pages/index.html',
    activetab: 'projects',
    controller: HomeCtrl
  }).
  when('/project/:projectId', {
    templateUrl: function(params) {
      return 'pages/' + params.projectId + '.html';
    },
    controller: ProjectCtrl,
    activetab: 'projects'
  }).
  when('/privacy', {
    templateUrl: 'pages/privacy.html',
    controller: PrivacyCtrl,
    activetab: 'privacy'
  }).
  when('/about', {
    templateUrl: 'pages/about.html',
    controller: AboutCtrl,
    activetab: 'about'
  }).
  otherwise({
    redirectTo: '/'
  });
}]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function($scope, $http, $browser, $timeout, $route) {

  $scope.$on("$routeChangeSuccess", function(scope, next, current) {
    $scope.part = $route.current.activetab;
  });
  $http.get("js/dummy.json")
    .success(function(response) {
      $scope.products = response;
    });
    console.log("hello"+ $scope.products );

  $scope.showForm = function() {
    $('.contactRow').slideToggle();
  };
  $scope.closeForm = function() {
    $('.contactRow').slideUp();
  };
}]);

app.config(['$locationProvider', function($location) {
  $location.hashPrefix('!');
}]);

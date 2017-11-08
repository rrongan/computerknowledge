/**
 * Main AngularJS Web Application
 */
var app = angular.module('ck', [
  'ngRoute',
  'ngAnimate'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})
    // Pages
    .when("/disclaimer", {templateUrl: "partials/disclaimer.html", controller: "MainCtrl"})
    .when("/reference", {templateUrl: "partials/reference.html", controller: "MainCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "MainCtrl"})
    .when("/404", {templateUrl: "partials/404.html", controller: "MainCtrl"})
    .when("/architecture", {templateUrl: "partials/architecture.html", controller: "MainCtrl"})
    .when("/components", {templateUrl: "partials/components.html", controller: "MainCtrl"})
    .when("/input", {templateUrl: "partials/input.html", controller: "MainCtrl"})
    .when("/output", {templateUrl: "partials/output.html", controller: "MainCtrl"})
    .when("/process", {templateUrl: "partials/process.html", controller: "MainCtrl"})
    .when("/memory", {templateUrl: "partials/memory.html", controller: "MainCtrl"})
    .when("/buying", {templateUrl: "partials/buying.html", controller: "MainCtrl"})
    .when("/ucd", {templateUrl: "partials/ucd.html", controller: "MainCtrl"})
    // else 404
    .otherwise({redirectTo:"/"});

    $locationProvider.hashPrefix('');
}]);

app.controller('HomeCtrl', function ($scope) {

});

app.controller('MainCtrl', function ($scope) {

});

app.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
});

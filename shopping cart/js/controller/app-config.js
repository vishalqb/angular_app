/*global angular*/
var app = angular.module("cart", ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    "use strict";
    $routeProvider
        .when("/", {
            templateUrl : "pages/home.html",
            controller : "cartController"
        })
        .when("/details", {
            templateUrl : "pages/details.html",
            controller : "detailsController"
        });
    //$locationProvider.html5Mode(true);
}]);
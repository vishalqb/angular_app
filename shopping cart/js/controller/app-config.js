/*global angular*/
var app = angular.module("cart", ["ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider
        .state("home", {
            url : "/",
            templateUrl : "templates/home.html",
            controller : "cartController"
        })
        .state("details", {
            url : "/details",
            templateUrl : "templates/details.html",
            controller  : "detailsController"
        });
    $urlRouterProvider.otherwise("/");
}]);
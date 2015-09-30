/*global angular*/
var app = angular.module("app", ["ui.router", "ui.filters"]);

app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider
        .state("login", {
            url : "/",
            templateUrl : "templates/login.html",
            controller : "loginController"
        })
        .state("home", {
            url : "/home",
            templateUrl : "templates/home.html",
            controller : "homeController"
        })
        .state("details", {
            url : "/details",
            templateUrl : "templates/details.html",
            controller : "detailsController"
        });
    $urlRouterProvider.otherwise("/");
}]);

//app.controller("apicall", ["$scope", "$http", function ($scope, $http) {
//    var getData = $http.get("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
//    getData.success(function (response) {
//        $scope.data = angular.fromJson(response);
//        console.log(response);
//    });
//    getData.error(function (response) {
//        $scope.data = "failure";
//        console.log(response);
//    });
//}]);
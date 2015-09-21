/*global $, angular */
var prods = [], pname, name_value, pprice, price_value, pavail, avail_value, total_value, tot = 0, total_price = 0;
    
$(document).ready(function () {
    "use strict";
    $(".row").mouseenter(function () {
        $("img").mouseenter(function (e) {
            var ele = e.currentTarget.id;
            $("#" + ele).css("opacity", "0.5");
        });
        $("img").mouseout(function (e) {
            var ele = e.currentTarget.id;
            $("#" + ele).css("opacity", "1");
        });
    });
});

var app = angular.module("cart", []);
app.controller("cartController", ["$scope", function ($scope) {
    "use strict";
    $scope.productName = "";
    $scope.productPrice;
    $scope.productAvail;
    $scope.idValue = 0;
    $scope.totalPrice = 0;
    $scope.productCount;
    $scope.status = "";
    $scope.prods = [
        {name : "Shirts", price : 100, availability : 10, path : "assets/0.jpg", count : 0},
        {name : "Accessories", price : 50, availability : 7, path : "assets/1.jpg", count : 0},
        {name : "Sports", price : 200, availability : 21, path : "assets/2.jpg", count : 0},
        {name : "Mobiles", price : 1000, availability : 14, path : "assets/3.jpg", count : 0},
        {name : "Books", price : 200, availability : 16, path : "assets/4.jpg", count : 0},
        {name : "Computer", price : 2000, availability : 11, path : "assets/5.jpg", count : 0},
        {name : "Furniture", price : 1500, availability : 5, path : "assets/6.jpg", count : 0},
        {name : "Shoes", price : 150, availability : 8, path : "assets/7.jpg", count : 0},
        {name : "Bags", price : 150, availability : 6, path : "assets/8.jpg", count : 0}
    ];
    
    $scope.removeCart = function () {
        if ($scope.totalPrice <= 0) {
            $scope.totalPrice = 0;
            $scope.status = "No products selected";
        } else {
            $scope.status = "";
            $scope.prods[$scope.idValue].availability += 1;
            $scope.productAvail = $scope.prods[$scope.idValue].availability;
            $scope.totalPrice -= $scope.prods[$scope.idValue].price;
            $scope.prods[$scope.idValue].count -= 1;
            $scope.productName = $scope.prods[$scope.idValue].name;
            $scope.productCount = $scope.prods[$scope.idValue].count;
        }
    };

    $scope.addCart = function () {
        if ($scope.prods[$scope.idValue].availability <= 0) {
            $scope.status = "No products available";
        } else {
            $scope.status = "";
            $scope.prods[$scope.idValue].availability -= 1;
            $scope.productAvail = $scope.prods[$scope.idValue].availability;
            $scope.totalPrice += $scope.prods[$scope.idValue].price;
            $scope.prods[$scope.idValue].count += 1;
            $scope.productName = $scope.prods[$scope.idValue].name;
            $scope.productCount = $scope.prods[$scope.idValue].count;
        }
    };
    
    $scope.display = function ($event) {
        $scope.idValue = $event.target.id;
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productPrice = $scope.prods[$scope.idValue].price;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productCount = $scope.prods[$scope.idValue].count;
    };
}]);

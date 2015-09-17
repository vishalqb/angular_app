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
    $scope.idValue;
    $scope.totalPrice;
    $scope.prods = [
        {name : "Shirts", price : 100, availability : 10, path : "../shopping cart/assets/0.jpg"},
        {name : "Accessories", price : 50, availability : 7, path : "../shopping cart/assets/1.jpg"},
        {name : "Sports", price : 200, availability : 21, path : "../shopping cart/assets/2.jpg"},
        {name : "Mobiles", price : 1000, availability : 14, path : "../shopping cart/assets/3.jpg"},
        {name : "Books", price : 200, availability : 16, path : "../shopping cart/assets/4.jpg"},
        {name : "Computer", price : 2000, availability : 11, path : "../shopping cart/assets/5.jpg"},
        {name : "Furniture", price : 1500, availability : 5, path : "../shopping cart/assets/6.jpg"},
        {name : "Shoes", price : 150, availability : 8, path : "../shopping cart/assets/7.jpg"},
        {name : "Bags", price : 150, availability : 6, path : "../shopping cart/assets/8.jpg"}
    ];
    
   $scope.removeCart = function () {
        "use strict";
        $scope.prods[$scope.idValue].availability += 1;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
        $scope.totalPrice -= $scope.prods[$scope.idValue].price;
    };

    $scope.addCart = function () {
        "use strict";
        $scope.prods[$scope.idValue].availability -= 1;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
        $scope.totalPrice += $scope.prods[$scope.idValue].price; 
    }; 
    
    $scope.display = function($event) { 
        $scope.idValue = $event.target.id;
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productPrice = $scope.prods[$scope.idValue].price;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
    }
}]);

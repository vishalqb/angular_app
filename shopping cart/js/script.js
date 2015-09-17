/*global $, angular */
var prods = [], pname, name_value, pprice, price_value, pavail, avail_value, total_value, tot = 0, total_price = 0;
    
/*function start() {
    "use strict";
    var num = 0, new_div, new_image;
    $("#add").bind("click", function () {
        var product_name = name_value.text(), n = 0;
        while (n < 10) {
            if (prods[n].name === product_name) {
                prods[n].addCart(n);
                break;
            }
            n = n + 1;
        }
    });
    
    $("#cancel").bind("click", function () {
        var product_name = name_value.text(), n = 0;
        while (n < 10) {
            if (prods[n].name === product_name) {
                prods[n].removeCart(n);
                break;
            }
            n = n + 1;
        }
    });
} */
    
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
    $scope.totalPrice = 0;
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
    
   /* $scope.removeCart = function (n) {
        "use strict";
        this.availability = this.availability + 1;
        tot = tot - this.price;
        total_value.text("Total price" + tot);
        display(n);
        total_value.text("Total price" + tot);
    };

    $scope.addCart = function (n) {
        "use strict";
        this.availability = this.availability - 1;
        tot = tot + this.price;
        total_value.text("Total price" + tot);
        display(n);
        total_value.text("Total price" + tot);
    }; */
    
    $scope.display = function($event) { 
        $scope.idValue = $event.target.id;
        $scope.productName = $scope.prods[$scope.idValue].name;
        $scope.productPrice = $scope.prods[$scope.idValue].price;
        $scope.productAvail = $scope.prods[$scope.idValue].availability;
    }
}]);

app.controller("cartController", ["$scope", "productService", "$location", function ($scope, productService, $location) {
    "use strict";
    $scope.prods = productService.productList;
//    $scope.display = function (item) {
//        productService.itemClicked = item.target.id;
//        $location.path("/details");
//    };
    $scope.$on("itemClick",function(event, data){
        productService.itemClicked = data.target.id;
        $location.path("/details");
    });
}]);

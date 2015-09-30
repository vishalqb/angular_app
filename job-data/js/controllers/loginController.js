app.controller("loginController", ["$scope", "$location", function ($scope, $location) {
    $scope.validate = function() {
        if ($scope.username === "user" && $scope.password === "password") {
            $location.path("/home");
        } else {
            angular.element($("#errorText")).text("Invalid username and password");
        }
    }
}]);
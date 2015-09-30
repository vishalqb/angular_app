app.controller("detailsController", ["$scope", "getData", function($scope, getData){
    $scope.data = getData.data;
    $scope.data.then(function (value) {
        $scope.jobDetails = value;
    });
    $scope.images = getData.images;
}]);
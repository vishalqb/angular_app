app.controller("homeController", ["$scope", "getData", function ($scope, getData) {
    $scope.jobDetails = [];
    getData.retrieve("http://nodejs-qbjsstudy.rhcloud.com/api/get_job_data");
    $scope.data = getData.data;
    $scope.data.then(function (value) {
        $scope.jobDetails = value;
    });
    $scope.images = getData.images;
    $scope.clicked = function(name){
        getData.selected = name.target.name;
        console.log(getData.selected);
    };
}]);
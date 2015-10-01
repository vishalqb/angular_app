app.controller("detailsController", ["$scope", "getData", function ($scope, getData) {
    "use strict";
    $scope.visible = false;
    $scope.jobDetails = getData.data;
    $scope.type = getData.selected;
    $scope.$on("show", function (event, receivedData) {
        $scope.visible = true;
        $scope.employer = receivedData.employer;
        $scope.lastDate = receivedData.LastDateOfApplication;
        $scope.postedDate = receivedData.PostedDate;
        $scope.expLevel = receivedData.experianceLevel;
        $scope.expYrs = receivedData.experianceYears;
        $scope.vacancy = receivedData.numberOfVacencies;
        $scope.qualification = receivedData.qualification;
    });
}]);

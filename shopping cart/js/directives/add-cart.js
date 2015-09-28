app.directive("addCart", function () {
    "use strict";
    return {
        restrict : "E",
        scope : false,
        template : "<input type='button' class='btn btn-danger' id='add' value='Add' ng-click='addCart()'>"
    };
});


app.directive("cancelCart", function () {
    "use strict";
    return {
        restrict : "E",
        scope : false,
        template : "<input type='button' class='btn btn-danger' id='cancel' value='Cancel' ng-click='removeCart()'>"
    };
});
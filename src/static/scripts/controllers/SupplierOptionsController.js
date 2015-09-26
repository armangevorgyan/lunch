/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch){
    function SupplierOptionsController($scope, $http, $location) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
    }
    SupplierOptionsController.prototype.init= function() {
        this.$scope.dishes = ['','','','', ''];

    };
    SupplierOptionsController.prototype.save = function(){

    };
    lunch.SupplierOptionsController = SupplierOptionsController;
})(lunch);

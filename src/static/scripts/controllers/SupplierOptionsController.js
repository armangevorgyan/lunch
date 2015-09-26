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
        this.$scope.foods = ['1','2','3','4', '5'];

    };
    SupplierOptionsController.prototype.save = function(){

    };
    lunch.SupplierOptionsController = SupplierOptionsController;
})(lunch);

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
        var scope = this.$scope;
        scope.dishes = [''];
        scope.$watch('dishes', function() {
            console.log('ok');
            if(scope.dishes[scope.dishes.length -1]) {
                scope.dishes.push('');
            }
        });
    };
    SupplierOptionsController.prototype.save = function(){

    };
    lunch.SupplierOptionsController = SupplierOptionsController;
})(lunch);

/**
 * Created by arman.gevorgyan on 27-Sep-15.
 */
(function (lunch) {
    function SupplierAddFoodController($scope, $http) {
        this.$scope = $scope;
        this.$http = $http
    }

    SupplierAddFoodController.prototype.init = function () {
        this.$scope.food = {
            url: '',
            foodName: '',
            description: ''
        }

    };

    lunch.SupplierAddFoodController = SupplierAddFoodController;
})(lunch);

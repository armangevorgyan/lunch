/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch){
    function SupplierFoodController($scope, $route, foodWebService) {
        this.$scope= $scope;
        this.$route = $route;
        this.foodWebService = foodWebService;
    }

    SupplierFoodController.prototype.init= function(){
        var params = this.$route.current.params;
        this.$scope.type = params.type;
        this.foodWebService.read(this.$scope.type).then(function(response){
            this.scope.foods = response;
        })
    };
    lunch.SupplierFoodController = SupplierFoodController;
})(lunch);
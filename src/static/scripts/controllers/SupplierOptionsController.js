/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch){
    function SupplierOptionsController($scope,  $route, foodWebService) {
        this.$scope = $scope;
        this.$route =  $route;
        this.foodWebService = foodWebService;
    }
    SupplierOptionsController.prototype.init= function() {
        var params = this.$route.current.params, that= this;
        this.$scope.type = params.type;
        this.foodWebService.read(this.$scope.type).then(function(response){
            that.$scope.foods = response;
        })
    };
    SupplierOptionsController.prototype.save = function(){

    };
    lunch.SupplierOptionsController = SupplierOptionsController;
})(lunch);

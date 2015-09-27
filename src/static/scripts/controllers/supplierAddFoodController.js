/**
 * Created by arman.gevorgyan on 27-Sep-15.
 */
(function (lunch) {
    function SupplierAddFoodController($scope, $http, $location, foodWebService) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location =$location;
        this.foodWebService = foodWebService;
    }

    SupplierAddFoodController.prototype.init = function () {
        this.$scope.food = {
            url: '',
            foodName: '',
            description: '',
            type:''
        }

    };
SupplierAddFoodController.prototype.add = function(){
    var that =this;
    this.foodWebService.create(this.$scope.food).then(function(response){
        that.$location.path('/supplier');
    })
};
    lunch.SupplierAddFoodController = SupplierAddFoodController;
})(lunch);

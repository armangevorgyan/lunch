/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch){
    function SupplierOptionsController($scope,  $route, $location, foodWebService, foodAvailabilityWebService) {
        this.$scope = $scope;
        this.$route =  $route;
        this.$location = $location;
        this.foodWebService = foodWebService;
        this.foodAvailabilityWebService = foodAvailabilityWebService;
    }
    SupplierOptionsController.prototype.init= function() {
        var params = this.$route.current.params, that= this,
        date = new Date();
        this.$scope.type = params.type;
        date.setFullYear(params.year);
        date.setMonth(params.month);
        date.setDate(params.day);
        this.$scope.date = date;

        this.foodWebService.read(this.$scope.type).then(function(response){
            that.$scope.foods = response;
        })
    };
    SupplierOptionsController.prototype.save = function(){
        var that =this,
            date = this.$scope.date;
       var foodsId = [];
        for(var i = 0; i< that.$scope.foods.length; i++ ){
            foodsId.push(that.$scope.foods[i].id)
        }
        console.log(date);
        this.foodAvailabilityWebService.create(this.$scope.type,date,foodsId)
            .then(function(response){
                that.$location.path('/supplier')
            })

    };
    lunch.SupplierOptionsController = SupplierOptionsController;
})(lunch);

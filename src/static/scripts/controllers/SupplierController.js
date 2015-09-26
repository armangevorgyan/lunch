/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch){
    function SupplierController($scope, $http, $location) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
    }
SupplierController.prototype.init = function() {
    var fromDate,
        toDate,
        currentDate,
        dates=[],
        i;


    fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - fromDate.getDay() + 1);
    toDate = new Date(fromDate);
    toDate.setDate(toDate.getDate() + 7);
    for(i = 0; i < 7; i++){
        currentDate = new Date(fromDate);
        currentDate.setDate(currentDate.getDate() + i);
        dates.push(currentDate);
    }
    this.$scope.fromDate = fromDate;
    this.$scope.toDate = toDate;
    this.$scope.dates = dates;
};
    SupplierController.prototype.loadLunches = function () {
        var that = this,
            fromDate = this.$scope.fromDate,
            toDate = this.$scope.toDate;

        this.lunchWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.lunches = response;
            });
    };
    SupplierController.prototype.foodTypeList = function(type){
        this.$location.path('supplier/food/' + type)
    };
    lunch.SupplierController = SupplierController;
})(lunch);

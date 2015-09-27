(function(lunch) {
    function LunchListController($scope, $http, foodChoiceWebService, foodAvailabilityWebService) {
        this.$scope = $scope;
        this.$http = $http;
        this.foodChoiceWebService = foodChoiceWebService;
        this.foodAvailabilityWebService = foodAvailabilityWebService;
        this.foodChoiceBuilder = new lunch.FoodChoiceBuilder();
        this.foodAvailabilityBuilder = new lunch.FoodAvailabilityBuilder();
    };
    LunchListController.prototype.init = function () {
        var fromDate,
            toDate;

        fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - fromDate.getDay() + 1);
        console.log(fromDate.getDate() - fromDate.getDay() + 1);
        fromDate.setHours(0);
        fromDate.setMinutes(0);
        fromDate.setSeconds(0);
        fromDate.setMilliseconds(0);
        toDate = new Date(fromDate);
        toDate.setDate(toDate.getDate() + 7);
        this.$scope.fromDate = fromDate;
        this.$scope.toDate = toDate;

        this.loadLunches();
    };

    LunchListController.prototype.loadLunches = function () {
        var that = this,
            fromDate = this.$scope.fromDate,
            toDate = this.$scope.toDate,
            foodChoiceBuilder = this.foodChoiceBuilder,
            foodAvailabilityBuilder = this.foodAvailabilityBuilder;

        this.foodAvailabilityWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.availabilities = that.foodAvailabilityBuilder.groupByDate(response);
            });

        this.foodChoiceWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.choices = that.foodChoiceBuilder.buildGruppedChoises(response);
            });
    };

    lunch.LunchListController = LunchListController;
})(lunch);

(function(lunch) {
    function LunchListController($scope, $http, foodChoiceWebService) {
        this.$scope = $scope;
        this.$http = $http;
        this.foodChoiceWebService = foodChoiceWebService;
        this.foodChoiceBuilder = new lunch.FoodChoiceBuilder();
    };
    LunchListController.prototype.init = function () {
        var fromDate,
            toDate;

        fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - fromDate.getDay() + 1);
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
            foodChoiceBuilder = this.foodChoiceBuilder;

        this.foodChoiceWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.choices = foodChoiceBuilder.buildGruppedChoises(response);
                console.log(that.$scope.choices);
            });
    };

    lunch.LunchListController = LunchListController;
})(lunch);

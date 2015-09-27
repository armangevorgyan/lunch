(function(lunch) {
    function ChooseController($scope, $route, $location, foodAvailabilityWebService, foodChoiceWebService) {
        this.$scope = $scope;
        this.$route = $route;
        this.$location = $location;
        this.foodAvailabilityWebService = foodAvailabilityWebService;
        this.foodChoiceWebService = foodChoiceWebService;
        this.foodAvailabilityBuilder = new lunch.FoodAvailabilityBuilder();
    };
    ChooseController.prototype.init = function () {
        var params = this.$route.current.params,
            date = new Date();

        date.setFullYear(params.year);
        date.setMonth(params.month);
        date.setDate(params.day);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        this.$scope.date = date;
        this.$scope.type = params.type;
        this.loadOptions();
    };

    ChooseController.prototype.loadOptions = function () {
        var that = this,
            date = this.$scope.date,
            type = this.$scope.type,
            toDate = new Date(date);

        toDate.setDate(toDate.getDate() + 1);
        toDate.setMilliseconds(-1);

        this.foodAvailabilityWebService.read(date, toDate)
            .then(function (response) {
                var availabilities = that.foodAvailabilityBuilder.groupByType(response);
                that.$scope.availabilities = availabilities[type];
            });
    };

    ChooseController.prototype.choose = function(id) {
        var that = this;
        this.foodChoiceWebService.create(id)
            .then(function(){
                that.$location.path('/');
            });
    };

    lunch.ChooseController = ChooseController;
})(lunch);

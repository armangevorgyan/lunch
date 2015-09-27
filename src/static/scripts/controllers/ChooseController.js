(function(lunch) {
    function ChooseController($scope, $route, foodAvailabilityWebService, foodChoiceWebService) {
        this.$scope = $scope;
        this.$route = $route;
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
            type = this.$scope.type;

        this.foodAvailabilityWebService.read(date, date)
            .then(function (response) {
                var availabilities = that.foodAvailabilityBuilder.groupByType(response);
                that.$scope.availabilities = availabilities[type];
            });
    };

    ChooseController.prototype.choose = function(id) {
        this.foodChoiceWebService.create(id)
            .then(function(){
                console.log('ok');
            });
    };

    lunch.ChooseController = ChooseController;
})(lunch);

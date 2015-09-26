(function(lunch) {
    function ChooseController($scope, $route, foodOptionsWebService) {
        this.$scope = $scope;
        this.$route = $route;
        this.foodOptionsWebService = foodOptionsWebService;
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

        this.foodOptionsWebService.read(type, date)
            .then(function (response) {
                that.$scope.lunches = response;
            });
    };

    lunch.ChooseController = ChooseController;
})(lunch);

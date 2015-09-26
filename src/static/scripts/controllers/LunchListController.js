(function(lunch) {
    function LunchListController($scope, $http, lunchWebService) {
        this.$scope = $scope;
        this.$http = $http;
        this.lunchWebService = lunchWebService;
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
            toDate = this.$scope.toDate;

        this.lunchWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.lunches = response;
            });
    };

    lunch.LunchListController = LunchListController;
})(lunch);

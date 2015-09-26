(function(lunch) {
    function ChooseController($scope) {
        this.$scope = $scope;
    };
    ChooseController.prototype.init = function () {
        var date;

        date = new Date();

        //this.loadLunches();
    };

    ChooseController.prototype.loadOptions = function () {
        var that = this,
            fromDate = this.$scope.fromDate,
            toDate = this.$scope.toDate;

        this.foodOptionsWebService.read(fromDate, toDate)
            .then(function (response) {
                that.$scope.lunches = response;
            });
    };

    lunch.ChooseController = ChooseController;
})(lunch);

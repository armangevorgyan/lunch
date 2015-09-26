(function(lunch) {
    function ListController($scope, $http) {
        this.$scope = $scope;
        this.$http = $http;
    };
    ListController.prototype.init = function () {
        var startDate,
            endDate;
        this.$scope.chooses = [

            {
                id: '',
                dish: '',
                salad: ''
            }, {
                dish: '',
                salad: ''
            }, {
                dish: '',
                salad: ''
            }, {
                dish: '',
                salad: ''
            }, {
                dish: '',
                salad: ''
            }];
        this.$scope.options = {
            era:'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        startDate = new Date();
        startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
        endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
        this.$scope.startDate = startDate;
        this.$scope.endDate = endDate;
    };

    ListController.prototype.loadLunches = function () {
        var that = this,
            startDate = this.$scope.startDate,
            endDate = this.$scope.endDate;

        this.$http.get("/chooses/?from=" + startDate.toISOString() + '&toDate' + endDate.toISOString()).success(function (response) {
            that.$scope.editUserId = 0;
            that.$scope.lunchesSelected = response;
        });
        this.$http.get("/lunches/" + date.toDateString()).success(function (response) {
            that.$scope.salads = response.salads;
            that.$scope.dishes = response.dishes;
        });
    };
    ListController.prototype.saveChooses = function (userId) {
        var that = this,
        date = this.$scope.startDate;
        this.$scope.chosenLunch = {
                id: userId,
                lunchForFiveDay: this.$scope.chooses
            };
       // this.$scope.chooses[0].id = userId;
        this.$http.post("/chooses/" + date.toDateString(), this.$scope.chosenLunch).success(function (response) {
            console.log(response);
        });
        console.log(this.$scope.chooses);
        console.log(this.$scope.chosenLunch);
        that.$scope.editUserId = 0;

    };
    ListController.prototype.editChooses = function (userId) {
        var that = this,
            date = this.$scope.startDate;

        this.$http.get("/chooses/" + date.toDateString()).success(function (response) {
            that.$scope.editUserId = userId;
            that.$scope.lunchesSelected = response;
        });
    };
    lunch.ListController = ListController;
})(lunch);

SetupLunchController = function ($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
};
SetupLunchController.prototype.init = function () {
    var startDate;
    startDate = new Date();
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
    this.$scope.startDate = startDate;

    this.loadWeekLunches();

};
SetupLunchController.prototype.loadWeekLunches = function () {
    var that = this,
        date = this.$scope.startDate;

    this.$http.get('/lunches/:' + date)
        .success(function(response){

            that.salads = response.salads;
            that.dishes = response.dishes;

        })
        .error(function(response){
            if(response.status = 404) {
                that.initSalads();
                that.initDishes();

            }
        });
};
SetupLunchController.prototype.initSalads = function () {
    var i,
        j,
        variants,
        salads = [];

    for (i = 0; i < 5; i++) {
        variants = [];
        for (j = 0; j < 4; j++) {
            variants.push({
                title: ''
            });
        }
        salads.push(variants);
    }
    this.$scope.salads = salads;
};

SetupLunchController.prototype.initDishes = function () {
    var i,
        j,
        variants,
        dishes = [];

    for (i = 0; i < 5; i++) {
        variants = [];
        for (j = 0; j < 4; j++) {
            variants.push({
                title: ''
            });
        }
        dishes.push(variants);
    }
    this.$scope.dishes = dishes;
};

SetupLunchController.prototype.saveSetupLunches = function () {
    var that = this,
        date = this.$scope.startDate,
        lunches = {
            salads: this.$scope.salads,
            dishes: this.$scope.dishes
        };
    this.$http.post('/lunches/:' + date, lunches)
        .success(function (response) {
            that.$scope.status = response.status;
            console.log(that.$scope.status);
        });
    console.log(that.$scope.salads);
    console.log(that.$scope.dishes);
};

app.controller('setupLunchController', function ($scope, $http) {
    return new SetupLunchController($scope, $http);
});

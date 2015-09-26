/* app.controller('listController', function ($scope, $http) {
 $scope.days = [{
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
 var date = new Date();
 $scope.firstDayOfWeek = new Date(date.setDate((date.getDate()) - Number(date.getDay()) + 1));
 $scope.lastDayOfWeek = new Date(date.setDate((date.getDate()) - Number(date.getDay()) + 5));
 $scope.nextWeek =function()  {
 $scope.nextMonday = $scope.firstDayOfWeek.setDate($scope.firstDayOfWeek.getDate() + 7);
 $scope.firstDayOfWeek =new Date($scope.nextMonday);
 $scope.lastDayOfWeek =new Date($scope.nextMonday + 1000*60*60*24*4);
 console.log( $scope.firstDayOfWeek);
 console.log( $scope.lastDayOfWeek)
 };
 $scope.previousWeek =function()  {
 $scope.nextMonday = $scope.firstDayOfWeek.setDate($scope.firstDayOfWeek.getDate() -7);
 $scope.firstDayOfWeek =new Date($scope.nextMonday);
 $scope.lastDayOfWeek =new Date($scope.nextMonday + 1000*60*60*24*4);
 console.log( $scope.firstDayOfWeek);
 console.log( $scope.lastDayOfWeek)
 };
 function loadLunches(date) {
 $http.get("/lunches/selected/:" + date).success(function (response) {
 $scope.editUserId = 2;
 $scope.lunchesSelected = response;
 });
 $http.get("/lunches/:" + date).success(function (response) {
 $scope.salads = response.salads;
 $scope.dishes = response.dishes;
 });
 }

 loadLunches($scope.firstDayOfWeek);

 });
 */


ListController = function ($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
};
ListController.prototype.init = function () {
    var startDate;
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
    this.$scope.startDate = startDate;
};

ListController.prototype.loadLunches = function () {
    var that = this,
        date = this.$scope.startDate;

    this.$http.get("/chooses/" + date.toDateString()).success(function (response) {
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
app.controller('listController', function ($scope, $http) {
    return new ListController($scope, $http);


});
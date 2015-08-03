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


ListController = function($scope, $http) {
 this.$scope = $scope;
 this.$http = $http;
 };
 ListController.prototype.init = function() {
     this.$scope.days = [{
         dish: 'class',
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
 this.$scope.firstDayOfWeek = new Date(date.setDate((date.getDate()) - Number(date.getDay()) + 1));
 this.$scope.lastDayOfWeek = new Date(date.setDate((date.getDate()) - Number(date.getDay()) + 5));
 };
 ListController.prototype.nextWeek = function()  {
 this.$scope.nextMonday = this.$scope.firstDayOfWeek.setDate(this.$scope.firstDayOfWeek.getDate() + 7);
 this.$scope.firstDayOfWeek =new Date(this.$scope.nextMonday);
 this.$scope.lastDayOfWeek =new Date(this.$scope.nextMonday + 1000*60*60*24*4);
 console.log( this.$scope.firstDayOfWeek);
 console.log( this.$scope.lastDayOfWeek)
 };
 ListController.prototype.previousWeek = function()  {
 this.$scope.nextMonday = this.$scope.firstDayOfWeek.setDate(this.$scope.firstDayOfWeek.getDate() - 7);
 this.$scope.firstDayOfWeek =new Date(this.$scope.nextMonday);
 this.$scope.lastDayOfWeek =new Date(this.$scope.nextMonday + 1000*60*60*24*4);
 console.log( this.$scope.firstDayOfWeek);
 console.log( this.$scope.lastDayOfWeek)
 };

 ListController.prototype.loadLunches = function(date){
 var that =this;

 this.$http.get("/lunches/selected/" + date).success(function (response) {
 that.$scope.editUserId = 2;
 that.$scope.lunchesSelected = response;
 });
 this.$http.get("/lunches/" + date).success(function (response) {
 that.$scope.salads = response.salads;
     that.$scope.mySalads=that.$scope.salads[0];
 that.$scope.dishes = response.dishes;
 });
 };

 app.controller('listController', function ($scope, $http) {
 return new ListController($scope, $http);


 });
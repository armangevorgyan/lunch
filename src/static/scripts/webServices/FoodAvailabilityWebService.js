(function(lunch) {
    function FoodAvailabilityWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodAvailabilityWebService.prototype = new lunch.AbstreactWebService();
    FoodAvailabilityWebService.prototype.read = function(fromDate, toDate) {
        return this.get('/food-availability/' + fromDate.toISOString() + '/' + toDate.toISOString());
    };
    lunch.FoodAvailabilityWebService = FoodAvailabilityWebService;
})(lunch);

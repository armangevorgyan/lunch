(function(lunch) {
    function FoodAvailabilityWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodAvailabilityWebService.prototype = new lunch.AbstreactWebService();
    FoodAvailabilityWebService.prototype.read = function(fromDate, toDate) {
        return this.get('/food-availability/' + fromDate.toISOString() + '/' + toDate.toISOString());
    };
    FoodAvailabilityWebService.prototype.create = function(type,date,id) {
        return this.put('/food-availability/'+ type + '/' + date.toISOString(), id);
    };
    lunch.FoodAvailabilityWebService = FoodAvailabilityWebService;
})(lunch);

(function(lunch) {
    function FoodOptionsWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodOptionsWebService.prototype = new lunch.AbstreactWebService();
    FoodOptionsWebService.prototype.read = function(type, date) {
        return this.get('/food-options/?type=' + type + 'date=' + date.toISOString());
    };
    lunch.FoodOptionsWebService = FoodOptionsWebService;
})(lunch);

(function(lunch) {
    function FoodChoiceWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodChoiceWebService.prototype = new lunch.AbstreactWebService();
    FoodChoiceWebService.prototype.read = function(fromDate, toDate) {
        return this.get("/food-choice/" + fromDate.toISOString() + '/' + toDate.toISOString());
    };
    FoodChoiceWebService.prototype.create = function(id) {
        return this.put("/food-choice/" + id);
    };
    lunch.FoodChoiceWebService = FoodChoiceWebService;
})(lunch);

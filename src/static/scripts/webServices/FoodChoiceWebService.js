(function(lunch) {
    function FoodChoiceWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodChoiceWebService.prototype = new lunch.AbstreactWebService();
    FoodChoiceWebService.prototype.read = function(fromDate, toDate) {
        return this.get("/food-choice/" + fromDate.toISOString() + '/' + toDate.toISOString());
    };
    lunch.FoodChoiceWebService = FoodChoiceWebService;
})(lunch);

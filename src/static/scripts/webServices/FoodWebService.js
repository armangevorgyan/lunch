/**
 * Created by arman.gevorgyan on 26-Sep-15.
 */
(function(lunch) {
    function FoodWebService ($q, $http) {
        this.constructor($q, $http);
    }
    FoodWebService.prototype = new lunch.AbstreactWebService();
    FoodWebService.prototype.read = function(type) {
        return this.get('/food/' + type);
    };
    FoodWebService.prototype.create = function(type, food) {
        return this.put('/food/add', food);
    };
    lunch.FoodWebService = FoodWebService;
})(lunch);

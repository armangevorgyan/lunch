(function(lunch) {
    function LunchWebService ($q, $http) {
        this.constructor($q, $http);
    }
    LunchWebService.prototype = new lunch.AbstreactWebService();
    LunchWebService.prototype.read = function(fromDate, toDate) {
        return this.get("/lunch/?from=" + fromDate.toISOString() + '&to' + toDate.toISOString());
    };
    lunch.LunchWebService = LunchWebService;
})(lunch);

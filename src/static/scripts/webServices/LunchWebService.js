(function(lunch) {
    function LunchWebService ($http) {
        this.$http = $http;
    }
    LunchWebService.prototype.read = function(fromDate, toDate) {
        return this.$http.get("/lunch/?from=" + fromDate.toISOString() + '&to' + toDate.toISOString());
    };
    lunch.LunchWebService = LunchWebService;
})(lunch);

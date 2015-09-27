(function(lunch) {
    function AbstreactWebService () {
    }
    AbstreactWebService.prototype.constructor = function($q, $http) {
        this.$q = $q;
        this.$http = $http;
    };
    AbstreactWebService.prototype.get = function(url) {
        var defer = this.$q.defer();
        this.$http.get(url)
            .then(function(response) {
                defer.resolve(response.data);
            })
            .catch(function(response) {
                console.error('[AbstractWebService] Request:', url, 'Response:', response.status, response.data);
                defer.reject({
                    status: response.status,
                    data: response.data
                });
            });
        return defer.promise;
    };
    AbstreactWebService.prototype.put = function(url, body) {
        var defer = this.$q.defer();
        this.$http.put(url, body)
            .then(function(response) {
                defer.resolve(response.data);
            })
            .catch(function(response) {
                console.error('[AbstractWebService] Request:', url, 'Response:', response.status, response.data);
                defer.reject({
                    status: response.status,
                    data: response.data
                });
            });
        return defer.promise;
    };
    lunch.AbstreactWebService = AbstreactWebService;
})(lunch);

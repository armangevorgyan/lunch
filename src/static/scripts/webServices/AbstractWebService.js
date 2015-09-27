(function(lunch) {
    function AbstreactWebService () {
    }
    AbstreactWebService.prototype.constructor = function($q, $http) {
        this.$q = $q;
        this.$http = $http;
        this.url = 'http://10.18.1.67:8080';
        this.options = {
            headers: {
                Authorization: '29'
            }
        };
    };
    AbstreactWebService.prototype.get = function(url) {
        var defer = this.$q.defer();
        this.$http.get(this.url + url, this.options)
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
        this.$http.put(this.url + url, body, this.options)
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
    AbstreactWebService.prototype.post = function(url, body) {
        var defer = this.$q.defer();
        this.$http.post(this.url + url, body, this.options)
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
    AbstreactWebService.prototype.delete = function(url, body) {
        var defer = this.$q.defer();
        this.$http.delete(this.url + url, body, this.options)
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

function TokenService($window) {
    this.$window = $window;

    this.key = 'token';
}
TokenService.prototype.getToken = function() {
    return this.$window.localStorage.getItem(this.key);
};
TokenService.prototype.setToken = function(value) {
    this.$window.localStorage.setItem(this.key, value);
};

app.factory('tokenService', function($window) {
    return new TokenService($window);
});
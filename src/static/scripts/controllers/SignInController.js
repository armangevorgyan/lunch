(function(lunch){
   function SignInController ($scope, $http, $location, tokenService) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
        this.tokenService = tokenService;
    }
    SignInController.prototype.init = function() {
        this.$scope.user = {
            "email": "",
            "password": ""
        };


    };
    SignInController.prototype.signIn = function() {
        var that = this;
        this.$http.post('/token', {
            email: this.$scope.user.email,
            password: this.$scope.user.password
        }).success(function(response) {
            that.tokenService.setToken(response.token);
            that.$location.path('/');
            console.log(response);
        })
    };
lunch.SignInController = SignInController;
})(lunch);

(function(lunch){
    function SignUpController ($scope, $http, $location) {
        this.$scope = $scope;
        this.$http = $http;
        this.$location = $location;
    }
    SignUpController.prototype.init = function(){
        $scope.user = {
            "email": "",
            "pass": "",
            "firstName": "",
            "lastName": ""
        };
        $scope.dataObj = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            pass: $scope.user.pass
        };
    };

    SignUpController.prototype.signUp = function () {
        $http.post('/users', $scope.dataObj).success(function(response){
            $location.path('/');
            console.log(response);
        });
    };
    lunch.SignUpController = SignUpController;
})(lunch);

app.controller('signUpCtrl', function($scope, $http, $location){
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
    $scope.signUp = function () {
       $http.post('/users', $scope.dataObj).success(function(response){
           $location.path('/');
           console.log(response);
       });


    };

});
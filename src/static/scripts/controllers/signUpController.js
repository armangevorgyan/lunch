app.controller('signUpCtrl', function($scope, $http, $location){
    $scope.user = {
        "email": "",
        "pass": "",
        "name": "",
        "surname": ""
    };
    $scope.dataObj = {
        name: $scope.user.name,
        surname: $scope.user.surname,
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
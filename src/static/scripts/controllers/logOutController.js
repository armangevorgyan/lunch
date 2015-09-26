app.controller('logOutController', function($scope, $http){
    $http.get('/users/:id')
        .success(function(response){
            $scope.userName= response;
        })
});
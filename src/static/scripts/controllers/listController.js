
   app.controller('listCtrl', function($scope, $http) {
       $http.get("names.json").success(function(response){
           $scope.names = response;
           $scope.names1 = response.names1;
           $scope.names2 = response.names2;
           $scope.names3 = response.names3;


       });

});
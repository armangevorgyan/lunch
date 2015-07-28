app.controller("lunchCtrl", function($scope, $http){
    $scope.hideList=false;

   $http.get("lunch.json").success(function(response){
       $scope.dish1= response.dishesDay1;
       $scope.dish2= response.dishesDay2;
       $scope.dish3= response.dishesDay3;
       $scope.dish4= response.dishesDay4;
       $scope.salad1= response.saladsDay1;
       $scope.salad2= response.saladsDay2;
       $scope.salad3= response.saladsDay3;
       $scope.salad4= response.saladsDay4;

   });
    $scope.saveChooses = function(){
     $scope.chosen = document.getElementsByClassName("form-control")[0].options.selectedIndex;

      $scope.chosenDish =  $scope.dish1[ $scope.chosen].dishName;

        $scope.chosenArray =[];
        $scope.chosenArray.push($scope.chosenDish);
        console.log( $scope.chosenDish);
        $scope.hideList= !$scope.hideList;


    };


});
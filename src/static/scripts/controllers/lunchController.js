app.controller("lunchCtrl", function($scope, $http, $location){
    $scope.hideList=false;

    $scope.saveChooses = function(){

            $scope.chosen = document.getElementsByClassName("form-control")[0].options.selectedIndex;

            $scope.chosenDish =  $scope.dish1[ $scope.chosen].dishName;

            $scope.chosenArray =[];
            $scope.chosenArray.push($scope.chosenDish);
            console.log( $scope.chosenDish);
         $scope.hideList= !$scope.hideList;

        }
});
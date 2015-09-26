window.app = angular.module('myApp', ['ngRoute'])
    .service('tokenService', lunch.TokenService)

    .controller('listController', function ($scope, $http) {
        return new lunch.ListController($scope, $http);
    });

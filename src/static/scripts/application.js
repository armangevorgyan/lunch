window.app = angular.module('myApp', ['ngRoute'])
    .service('tokenService', lunch.TokenService)
    //WebServices
    .service('lunchWebService', lunch.LunchWebService)

    .controller('lunchListController', lunch.LunchListController)

    .directive('calendar', lunch.calendarDirective)
